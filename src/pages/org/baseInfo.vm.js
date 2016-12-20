export default class BaseInfoVM {
  constructor(data) {
    this.data = data;
    this.showMore = false;
    this.isHide = false;
  }
  isMore() {
    this.showMore = true;
  }
}
