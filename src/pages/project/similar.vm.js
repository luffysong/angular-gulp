export default class SimilarVM {
  constructor(data) {
    this.list = data;
    this.init();
  }
  init() {
    this.tagName = '综合';
    let item;
    let num = 1;
    function getList(limitlist, list, n) {
      if (list.length > (5 * n)) {
        limitlist = list.slice(0, (5 * n));
      } else {
        limitlist = list;
      }
      return limitlist;
    }

    function changeType(type) {
      num = 1;
      this.tagName = type;
      let index;
      for (let i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i].tagName === this.tagName) {
          index = i + 1;
        }
        if (index) {
          item = this.list[index - 1].companyList;
          this.companyList = getList(this.companyList, item, num);
        } else {
          this.companyList = [];
        }
      }
    }

    function more() {
      ++num;
      this.companyList = getList(this.companyList, item, num);
    }
    function showMore() {
      return !(this.companyList.length === item.length);
    }
    this.more = more;
    this.changeType = changeType;
    this.changeType(this.tagName);
    this.showMore = showMore;
  }
}
