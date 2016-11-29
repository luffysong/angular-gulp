import krData from 'krData';
export default class FinanceVM extends krData.FormVM {
  constructor(data, $scope, id, $sce, $q) {
    super(data);
    this.$scope = $scope;
    this.$sce = $sce;
    this.$q = $q;
    this.id = id;
    this.initData(data);
    this.init(data);
    this.projectService = krData.utls.getService('projectService');
  }

  props = ['financeAmount', 'financeAmountUnit', 'financeDate', 'investorList',
           'newsUrl', 'phase'];
  investProps = ['entityId', 'entityName', 'entityType'];

  initData(data) {
    angular.extend(this, data);
    this.financeAmountUnit = krData.META.CURRENCY_UNIT.CNY;
    this.investorList = [];

    this.autocomplete_options = {
      suggest: this.suggest.bind(this),
      on_select: this.onSelect.bind(this),
      auto_select_first: true,
      full_match: (item, word) => item.value.toLowerCase() === word.toLowerCase(),
    };
  }

  num = 1;
  financeList ;
  getlist(limitlist = [], list = [], n) {
    this.financeList = list;
    if (list.length > (5 * n)) {
      limitlist = list.slice(0, (5 * n));
    } else {
      limitlist = list;
    }
    return limitlist;
  }
  more() {
    ++this.num;
    this.list = this.getlist(this.list, this.financeList, this.num);
  }
  showMore() {
    return !(this.list.length === this.financeList.length);
  }

  init(data) {
    this.list = this.getlist(this.list, data, 1);
  }

  update() {
    if (!this.validate()) return;
    this.financeDate = `${this.financeDateYear}-${this.financeDateMonth}-01`;
    // this.investorList.map((val) => {
    //   delete (val.label);
    //   delete (val.value);
    // });

    this.projectService.addfinance({
      id: this.id,
    }, this.mapProps(this.props, this))
      .then(() => {
        krData.utls.deleteProps(this.props.concat(['financeDateYear', 'financeDateMonth']), this);
        this.investorList = [];
        this.financeAmountUnit = krData.META.CURRENCY_UNIT.CNY;
        krData.Alert.success('数据保存成功');
        this.isEdit = false;
      });
  }


  suggest(kw) {
    const defered = this.$q.defer();
    this.projectService.suggest(kw).then((list) => {
      defered.resolve(this.makeSuggestResult(kw, list.slice(0, 5)));
    });
    return defered.promise;
  }

  makeSuggestResult(kw, list) {
    const that = this;
    return list.map(function makeLabel(val) {
      if (val.entityType === 1) {
        const html = [];
        html.push(`<div class="suggest-label suggest-label-investor">
              <img src="${val.logo || '/images/investor-logo.png'}" />
              <div class="investor-name"><span>${val.entityName}</span></div>
              <span class="investor-org">${val.orgName}</span>`);
        if(val.position){
            html.push(`<span class="split">|</span>
                <span class="investor-position">${val.position}</span>`);
        }
        html.push(`</div>`);
        return {
          label: that.$sce.trustAsHtml(html.join('')),
          value: val.entityName,
          obj: val,
        };
      }
      return {
        label: that.$sce.trustAsHtml(
          `<div class="suggest-label suggest-label-investment">
            <img src="${val.logo || '/images/default-logo.png'}" />
            <span>${val.entityName}</span>
          </div>`
          ),
        value: val.entityName,
        obj: val,
      };
    });
  }

  onSelect(selectedItem) {
    if (!this.investorList.length) {
      this.investorList.push(selectedItem.obj);
    } else {
      this.investorList.forEach(value => {
        if (value.entityId === selectedItem.obj.entityId) {
          this.entityName = '';
          krData.Alert.alert('此投资方已存在');
        }
      });
      if (this.entityName) {
        this.investorList.push(selectedItem.obj);
      }
    }

    angular.element('.entity-name')[0].value = null;
  }

  deleteInvestor(item) {
    const index = this.investorList.indexOf(item);
    this.investorList.splice(index, 1);
  }

  isUndefined(obj){
    return (typeof obj === 'undefined');
  }

}
