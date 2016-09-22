export default class ProductVM {
  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {
    function setType(type) {
      this.curType = type;
    }

    function getData() {
      this.hideData = false;
    }
    function hide() {
      this.hideData = true;
    }

    this.curType = 'MONTH';
    this.hideData = true;
    this.setType = setType;
    this.getData = getData;
    this.hide = hide;
  }
}
