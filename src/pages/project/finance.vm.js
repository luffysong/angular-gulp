import krData from 'krData';
export default class FinanceVM extends krData.FormVM {
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
    this.projectService = krData.utls.getService('projectService');
  }
  initData(data) {
    angular.extend(this, data);
    // this.watch();
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
}
