export default class FundsVM {
  constructor(data) {
    angular.extend(this, data);
    this.hideDetail = true;
  }

  showFinanceDetail() {
    this.hideDetail = false;
  }

  hideFinanceDetail() {
    this.hideDetail = true;
  }
}
