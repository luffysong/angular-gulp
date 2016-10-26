import krData from 'krData';
export default class ProductVM extends krData.FormVM {
  constructor(data, id, $filter) {
    super(data);
    this.id = id;
    this.data = data;
    this.$filter = $filter;
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
    this.showChart = false;
    if (angular.isUndefined(this.data.companyData)) {
      this.showChart = false;
    } else {
      this.showChart = true;
    }
  }

  props = ['url', 'desc', 'name', 'ios', 'android', 'weixin'];

  init() {
    // console.log(typeof (this.data.companyData) !== 'undefined');



    this.dataTypes = [];
    this.dataKeepTypes = [];
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
      this.renderChart(type);
      this.completeData = [];
      this.renderData(type);
      console.log(this.curType);
    }

    function getData() {
      this.hideData = false;
    }
    function hide() {
      this.hideData = true;
    }

    this.curType = 'md_0006';
    this.hideData = true;
    this.setType = setType;
    this.getData = getData;
    this.hide = hide;

    this.completeData = [];


    if(this.data.companyData){
      this.getDataTypes();
      this.renderChart(this.curType);
      this.renderData(this.curType);
    }
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


  // 绘制产品数据图
  renderChart(curId) {

    console.log('filter test', this.$filter('number')(1.234455666,2));

    this.chartConfig = this.setBasicConfig();
    const yAxis = this.getYAxisData(curId);
    const xAxis = this.data.companyData.x;

    let name = '';
    this.data.companyData.y_list.map((val) => {
      if (val.fid === curId) {
        name = val.fdesc;
      }
    });

    this.chartConfig.series.push({
      data: xAxis.map((val, i) => {
        const y = this.$filter('number')(yAxis[i], 2);
        return [val, y];
      }),
      type: 'line',
      name: name,
    })
  }
  // 获取产品数据
  renderData(curId) {
    const that = this;
    // const yList = [];
    // const curName = '';
    const months = this.data.companyData.x;
    // const dataTypeList = this.data.companyData.y_list.map((val) => {
    //   return { fdesc: val.fdesc, y: val.y };
    // });
    this.data.companyData.y_list.map((val) => {
      if (val.fid === curId) {
        that.yList = val.y;
        that.curName = val.fdesc;
      }
    });
    this.curHead = [{ value: '月份' }, { value: that.curName }];
    months.map((val, i) => {
      this.completeData.push({
        month: val,
        data: that.yList[i],
      });
    });
  }

  // 获取绘制数据类型
  getDataTypes() {
    this.data.companyData.y_list.map((val) => {
      if (val.fdesc.indexOf('留存') === -1) {
        this.dataTypes.push({ fid: val.fid, fdesc: val.fdesc });
      } else {
        this.dataKeepTypes.push({ fid: val.fid, fdesc: val.fdesc });
      }
    });
  }

  // 获取Y轴相应数据
  getYAxisData(typeId) {
    const that = this;
    const yAxisData = [];
    this.data.companyData.y_list.map((val) => {
      if (val.fid === typeId) {
        that.yAxisData = val.y;
      }
    });
    return that.yAxisData;
  }

  setBasicConfig() {
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
        series: [],
      };
    return config;
  }

}
