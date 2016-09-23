export default class ProductVM {
  constructor(data) {
    this.data = data;
    this.init();
    console.log(this.data.companyDataList);
  }

  init() {
    function setType(type) {
      this.curType = type;
    }
    function setPlate(plate) {
      this.curPlate = plate;
    }

    function getData() {
      this.hideData = false;
    }
    function hide() {
      this.hideData = true;
    }

    this.curType = 'MONTH';
    this.curPlate = 'IOS';
    this.hideData = true;
    this.setType = setType;
    this.setPlate = setPlate;
    this.getData = getData;
    this.hide = hide;
  }
}
