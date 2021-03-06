export default class SimilarVM {
  constructor(data) {
    this.list = data;
    this.init();
  }
  num = 1;
  item;
  getList(limitlist, list, n) {
    if (list.length > (5 * n)) {
      limitlist = list.slice(0, (5 * n));
    } else {
      limitlist = list;
    }
    return limitlist;
  }
  changeType(type) {
    this.num = 1;
    this.tagName = type;
    let index;
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i].tagName === this.tagName) {
        index = i + 1;
      }
      if (index) {
        this.item = this.list[index - 1].companyList;
        this.companyList = this.getList(this.companyList, this.item, this.num);
      } else {
        this.companyList = [];
      }
    }
  }
  more() {
    ++this.num;
    this.companyList = this.getList(this.companyList, this.item, this.num);
  }
  showMore() {
    if (this.list[0]) {
      return !(this.companyList.length === this.item.length);
    }
    return false;
  }
  init() {
    if (this.list[0]) {
      this.changeType(this.list[0].tagName);
    } else {
      this.changeType('');
    }
  }
}
