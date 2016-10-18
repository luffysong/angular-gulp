import krData from 'krData';
export default class ProductVM extends krData.FormVM {
  constructor(data, $scope, $compile) {
    super(data);
    this.data = data;
    this.$scope = $scope;
    this.$compile = $compile;
    this.init();
    console.log(this.data);
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

  save() {
    if (this.validate()) {
      console.log();
    }
  }

  addLink() {
    angular.element('#productsUrl').append(this.$compile(`<div class="ios-address">
        <span class="error-tip" id="editProductIos"></span>
        <select class="form-control">
          <option>111</option>
          <option>222</option>
        </select>
        <input type="text" name="ios" placeholder="请填写产品链接"
               ng-model="vm.productVM.ios"
               message-id="editProductIos"
               required-error-message="请填写产品的链接"
               validator="required" class="form-control product-ios"/>
      </div>)`));
  }

}
