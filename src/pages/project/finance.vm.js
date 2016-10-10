import krData from 'krData';
export default class FinanceVM extends krData.FormVM {
  constructor(data, $scope, id) {
    super(data);
    this.$scope = $scope;
    this.id = id;
    this.initData(data);
    this.projectService = krData.utls.getService('projectService');
  }

  props = ['financeAmount', 'financeAmountUnit', 'financeDate', 'investorList',
           'newsUrl', 'phase'];

  initData(data) {
    angular.extend(this, data);
    this.financeAmountUnit = krData.META.CURRENCY_UNIT.CNY;
    this.investorList = [];
    // this.watch();
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    angular.extend(this, this.originalData);
  }

  // watchName() {
  //   const that = this;
  //   this.$scope.$watch('vm.baseInfoVM.name', function watchName(nv, ov) {
  //     if (nv !== ov) {
  //       that.$validation.validate(that.form.fullName);
  //     }
  //   });
  // }

  // watch() {
  //   this.watchName();
  // }

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

    this.projectService.addfinance({
      id: this.id,
    }, this.mapProps(this.props, this))
      .then(() => {
        krData.Alert.success('数据保存成功');
      });
  }
}
