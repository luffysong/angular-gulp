import krData from 'krData';
export default class FinanceVM extends krData.FormVM {
  constructor(data, $scope, id, $sce) {
    super(data);
    this.$scope = $scope;
    this.$sce = $sce;
    this.id = id;
    this.initData(data);
    // this.init();
    this.projectService = krData.utls.getService('projectService');
  }

  props = ['financeAmount', 'financeAmountUnit', 'financeDate', 'investorList',
           'newsUrl', 'phase'];
  investProps = ['entityId', 'entityName', 'entityType'];

  initData(data) {
    angular.extend(this, data);
    this.financeAmountUnit = krData.META.CURRENCY_UNIT.CNY;
    this.investorList = [];
    // this.watch();

    this.suggestInvestorList = [
      {
        entityId: 101,
        entityName: '红杉资本',
        entityType: 'COMPANY',
      },
      {
        entityId: 102,
        entityName: '经纬中国',
        entityType: 'COMPANY',
      },
      {
        entityId: 103,
        entityName: '蚂蚁金服',
        entityType: 'AGENCY',
      },
      {
        entityId: 104,
        entityName: '大石头',
        entityType: 'PERSON',
      },
    ];

    this.autocomplete_options = {
      suggest: this.suggest.bind(this),
      on_select: this.onSelect.bind(this),
      full_match: angular.noop,
    };
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    angular.extend(this, this.originalData);
  }


  init() {
    let num = 1;
    function getlist(limitlist, list, n) {
      if (list.length > (5 * n)) {
        limitlist = list.slice(0, (5 * n));
      } else {
        limitlist = list;
      }
      return limitlist;
    }
    function more() {
      ++num;
      this.list = getlist(this.list, this.data, num);
    }
    function showMore() {
      return !(this.list.length === this.data.length);
    }
    this.list = getlist(this.list, this.data, 1);

    this.more = more;
    this.showMore = showMore;
  }

  update() {
    if (!this.validate()) return;
    this.financeDate = `${this.financeDateYear}-${this.financeDateMonth}-01`;
    this.investorList.map((val) => {
      delete (val.label);
      delete (val.value);
    });

    this.projectService.addfinance({
      id: this.id,
    }, this.mapProps(this.props, this))
      .then(() => {
        krData.Alert.success('数据保存成功');
      });
  }


  suggest() {
    const result = [];

    this.suggestInvestorList.map((val) => {
      const change = {};
      change.label = this.$sce.trustAsHtml(
        `<div class="suggest-label"><p>${val.entityName}</p></div>`);
      change.value = val.entityName;
      change.entityId = val.entityId;
      change.entityName = val.entityName;
      change.entityType = val.entityType;
      result.push(change);
    });
    return result;
  }

  onSelect(selectedItem) {
    this.investorList.push(selectedItem);
    angular.element('.entity-name')[0].value = null;
  }

  deleteInvestor(item) {
    const index = this.investorList.indexOf(item);
    this.investorList.splice(index, 1);
  }

}
