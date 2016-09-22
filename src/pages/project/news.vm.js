import krData from 'krData';
export default class NewsVM extends krData.FormVM {
  constructor(data) {
    super(data);
    angular.extend(this, data);
    this.list = data;
    this.init();
  }
  init() {
    let num = 1;
    function getList(limitlist, list, n) {
      if (list.length > (5 * n)) {
        limitlist = list.slice(0, (5 * n));
      } else {
        limitlist = list;
      }
      return limitlist;
    }
    function more() {
      ++num;
      this.newsList = getList(this.newsList, this.list, num);
    }
    function showMore() {
      return !(this.newsList.length === this.list.length);
    }
    this.newsList = getList(this.newsList, this.list, 1);
    console.log(this.list);
    this.more = more;
    this.showMore = showMore;
  }
  setData() {
  }
  recovery() {
  }
}
