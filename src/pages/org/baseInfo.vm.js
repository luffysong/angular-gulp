export default class BaseInfoVM {
  constructor(data) {
    this.data = data;
    this.showMore = false;
  }
  isMore() {
    this.showMore = true;
  }
}
