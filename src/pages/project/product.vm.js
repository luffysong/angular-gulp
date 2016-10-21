import krData from 'krData';
export default class ProductVM extends krData.FormVM {
  constructor(data, id) {
    super(data);
    this.id = id;
    this.data = data;
    // this.$scope = $scope;
    // this.$compile = $compile;
    this.init();
    console.log(this.data);
    this.productLink = [{
      urlType: 'url',
      urlAddr: '',
    }];
    this.projectService = krData.utls.getService('projectService');

    this.hasValidated = true;
  }

  props = ['url', 'desc', 'name', 'ios', 'android', 'weixin'];

  init() {
    this.productLinkOptions = [
      {
        desc: '网站',
        value: 'url',
      },
      {
        desc: 'iOS App',
        value: 'ios',
      },
      {
        desc: 'Android App',
        value: 'android',
      },
      {
        desc: '微信公众号',
        value: 'weixin',
      },
    ];

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

  // 产品描述与产品链接至少填写一个
  isOk() {
    // const hasNullLink = this.productLink.map((val) => {
    //   if (val.urlType !== null && val.urlAddr !== '') {
    //     return false;
    //   }
    //   return true;
    // });
    // const that = this;
    let hasNullLink = true;
    for (let i = 0; i < this.productLink.length; i++) {
      if (this.productLink[i].urlType !== '' && this.productLink[i].urlAddr !== '') {
        hasNullLink = false;
        // krData.Alert.alert('请填写完整的产品链接');
        break;
      }
    }
    if ((angular.isUndefined(this.desc) || this.desc === '') && hasNullLink) {
      krData.Alert.alert('产品描述与产品链接请至少填写一个！');
      return false;
    }
    return true;
  }

  save() {
    // console.log(typeof this.desc === 'undefined');
    this.url = '';
    this.ios = '';
    this.android = '';
    this.weixin = '';

    this.productLink.map((val) => {
      if (val.urlType === 'url') {
        if (this.url) {
          krData.Alert.alert('重复的产品链接，请修改！');
          this.url = '';
          this.hasValidated = false;
          return;
        }
        this.hasValidated = true;
        this.url = val.urlAddr;
      } else if (val.urlType === 'ios') {
        if (this.ios) {
          krData.Alert.alert('重复的产品链接，请修改！');
          this.ios = '';
          this.hasValidated = false;
          return;
        }
        this.hasValidated = true;
        this.ios = val.urlAddr;
      } else if (val.urlType === 'android') {
        if (this.android) {
          krData.Alert.alert('重复的产品链接，请修改！');
          this.android = '';
          this.hasValidated = false;
          return;
        }
        this.hasValidated = true;
        this.android = val.urlAddr;
      } else if (val.urlType === 'weixin') {
        if (this.weixin) {
          krData.Alert.alert('重复的产品链接，请修改！');
          this.weixin = '';
          this.hasValidated = false;
          return;
        }
        this.hasValidated = true;
        this.weixin = val.urlAddr;
      }
    });
    if (this.validate() && this.hasValidated && this.isOk()) {
      this.projectService.addproduct({
        id: this.id,
      }, this.mapProps(this.props, this))
      .then(() => {
        krData.Alert.success('数据保存成功');
        this.productLink = [{
          urlType: 'url',
          urlAddr: '',
        }];
        this.desc = '';
        this.name = '';
        this.isEdit = false;
      });
    }
  }

  addLink() {
    this.productLink.push({ urlType: '', urlAddr: '' });
  }

  deletePro(item) {
    const index = this.productLink.indexOf(item);
    this.productLink.splice(index, 1);
  }


}
