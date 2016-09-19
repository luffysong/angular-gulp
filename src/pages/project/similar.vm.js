export default class SimilarVM {
  constructor(data) {
    this.list = data;
    this.init();
  }
  init() {
    this.tagName = '综合';
    function changeType(type) {
      this.tagName = type;
      for (let i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i].tagName === this.tagName) {
          this.companyList = this.list[i].companyList;
        }
      }
    }
    this.changeType = changeType;
    this.changeType(this.tagName);
  }
}
