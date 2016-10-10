export default class ProductVM {
  constructor(data) {
    this.data = data;
    this.init();
    // console.log(this.data.companyProductList[0].weixin==='');
  }

  init() {
    this.hasHovered = false;
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

    function setBasicConfig() {
      const config = {
        options: {
          chart: {
            type: 'line',
          },
          tooltip: {
            shared: true,
            crosshairs: {
              width: 1,
              color: '#E7E7E7',
              dashStyle: 'shortdot',
            },
          },
        },
        credit: {
          enabled: false,
        },
        title: {
          text: null,
        },
        xAxis: {
          type: 'category',
          startOnTick: true,
          tickMarkPlacement: 'on',
          tickWidth: 0,
        },
        yAxis: {
          title: {
            text: null,
          },
          gridLineWidth: 1,
          gridLineColor: 'rgba(242,244,245,1)',
        },
      };
      return config;
    }

    this.curType = 'MONTH';
    this.curPlate = 'IOS';
    this.hideData = true;
    this.setType = setType;
    this.setPlate = setPlate;
    this.getData = getData;
    this.hide = hide;

    this.chartConfig = setBasicConfig();
  }
  setHovered() {
    this.hasHovered = !this.hasHovered;
  }

}
