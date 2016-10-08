import krData from 'krData';
export default class FinanceVM extends krData.FormVM {
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
    // this.projectService = krData.utls.getService('projectService');
  }

  initData(data) {
    angular.extend(this, data);
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

  // update($event) {
  //   if (!this.validate($event)) return;
  //   this.projectService.editHeader({
  //     id: this.id,
  //   }, this.getCopy(['phase',
  //     'financeAmount',
  //     'financeAmountUnit',
  //     'entityName',
  //   ]))
  //     .then(() => {
  //       this.recovery();
  //       this.ok();
  //     });
  // }
}
