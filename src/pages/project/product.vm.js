import krData from 'krData';
export default class ProductVM extends krData.FormVM {
  constructor(data, id, $filter) {
    super(data);
    this.id = id;
    this.data = data;
    this.$filter = $filter;
    // this.$scope = $scope;
    // this.$compile = $compile;
    this.showChart = false;

    this.productLink = [{
      urlType: 'url',
      urlAddr: '',
    }];
    this.projectService = krData.utls.getService('projectService');
    this.productDataService = krData.utls.getService('productDataService');
    /*this.orgService = krData.utls.getService('orgService');*/

    this.hasValidated = true;
    this.init();
    // if (angular.isUndefined(this.data.companyData)) {
    //   this.showChart = false;
    // } else {
    //   this.showChart = true;
    // }
  }

  props = ['url', 'desc', 'name', 'ios', 'android', 'weixin'];

  init() {
    // console.log(typeof (this.data.companyData) !== 'undefined');

    this.loadAnalyze();
    this.setTrend();
    this.setDownload();
    this.setWebsite();
    this.retentionList = [
      {
        title: '一天后',
        percent: 0,
        key: 'save',
      }, {
        title: '三天后',
        percent: 0,
        key: 'save3',
      }, {
        title: '七天后',
        percent: 0,
        key: 'save7',
      }, {
        title: '三十天后',
        percent: 0,
        key: 'save30',
      },
    ];



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


    if(!angular.isUndefined(this.data.companyData) && !this.isNullObj(this.data.companyData)){
      this.getDataTypes();
      this.showChart = true;
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

    /*this.chartConfig = this.setBasicConfig();
    const yAxis = this.getYAxisData(curId).slice(-11);
    const xAxis = this.data.companyData.x.slice(-11);

    //Y轴单位设置
    if (this.curType === 'md_0006' || this.curType === 'md_0001' || this.curType === 'md_0009'){
      this.chartConfig.yAxis.labels = {
        format: '{value} 万',
      };
    } else {
      this.chartConfig.yAxis.labels = {
        format: '{value} %',
      };
    }

    let name = '';
    if (this.data.companyData.y_list) {
      this.data.companyData.y_list.map((val) => {
        if (val.fid === curId) {
          name = val.fdesc;
        }
      });
    }

    if (xAxis.length) {
      this.chartConfig.series.push({
        data: xAxis.map((val, i) => {
          const xVal = `${val.slice(0, 4)}-${val.slice(4, 6)}`;
          const y = this.$filter('number')(yAxis[i], 2).replace(",","") - 0.00;
          return [xVal, y];
        }),
        type: 'line',
        name: name,
      })
    }*/
  }
  // 获取产品数据
  renderData(curId) {
    /*const that = this;
    // const yList = [];
    // const curName = '';
    const months = this.data.companyData.x;
    // const dataTypeList = this.data.companyData.y_list.map((val) => {
    //   return { fdesc: val.fdesc, y: val.y };
    // });
    if (this.data.companyData.y_list) {
      this.data.companyData.y_list.map((val) => {
        if (val.fid === curId) {
          that.yList = val.y;
          that.curName = val.fdesc;
        }
      });
    }
    this.curHead = [{ value: '月份' }, { value: that.curName }];
    months.map((val, i) => {
      this.completeData.push({
        month: `${val.slice(0,4)}-${val.slice(4,6)}`,
        data: that.yList[i],
      });
    });
    this.completeData.reverse();*/
  }

  // 获取绘制数据类型
  getDataTypes() {
    if (this.data.companyData.y_list) {
      this.data.companyData.y_list.map((val) => {
        if (val.fdesc.indexOf('留存') === -1) {
          this.dataTypes.push({ fid: val.fid, fdesc: val.fdesc });
        } else {
          this.dataKeepTypes.push({ fid: val.fid, fdesc: val.fdesc });
        }
      });
    }
  }

  // 获取Y轴相应数据
  getYAxisData(typeId) {
    const that = this;
    const yAxisData = [];
    if (this.data.companyData.y_list) {
      this.data.companyData.y_list.map((val) => {
        if (val.fid === typeId) {
          that.yAxisData = val.y;
        }
      });
    }
    return that.yAxisData;
  }

  setBasicConfig() {
      const config = {
        options: {
          chart: {
            type: 'line',
            // height: 300,
          },
          tooltip: {
            // shared: true,
            useHTML: true,
            shadow: false,
            borderWidth: 0,
            padding: 0,
            borderRadius: 0,
            backgroundColor: 'transparent',
            formatter: function formatter() {
              return `<div class='tooltip-wrapper'>
                        <div class='my-tooltip'>
                          <div>
                            ${this.key.slice(0, 4)}年${this.key.slice(5, 7)}月
                          </div>
                          <div>
                            ${this.series.name.split('/')[0]}:${this.y}${this.series.name.split('/')[1]}
                          </div>
                        </div>
                      </div>`;
            },
          },
          colors: ['#88c4FF'],
          plotOptions: {
            line: {
              // gapSize: 10000,
              marker: {
                fillColor: '#fff',
                lineColor: '#88C4FF',
                lineWidth: 1,
                symbol: 'circle',
              },
            },
            series: {
              events: {
                legendItemClick: function () {
                  return false;
                }
              }
            }
          },
          legend: {
            verticalAlign: 'top',
            align: 'right',
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
          labels: {
            style: {
              font: '1px',
            },
          },
        },
        yAxis: {
          title: {
            text: null,
          },
          lineWidth: 1,
          gridLineWidth: 1,
          gridLineColor: 'rgba(242,244,245,1)',
        },
        series: [],
      };
    return config;
  }

  isNullObj(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  loadAnalyze() {
    this.productDataService.getProduct({
      id: this.id,
    }).then(data => {
      this.analyze = data;
      console.log(data);
      this.initChart();
    });
  }

  initChart() {
    this.setInvestmentTrend(this.analyze);
    this.setDownloadTrend(this.analyze);
    this.setWebsiteTrend(this.analyze);
    this.handleRetention(this.analyze.seriesData);
  }

  years = [];
  year = new Date().getFullYear();
  linecColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>DAU：<span>${this.dau}万人</span></p>
       <p>曝光量：<span>${this.exposure}</span></p>
      </div>`;
    },
  };
  downloadColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      function handleDate(date) {
        const l = date.length;
        const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
        return `${date.slice(0, 4)}年 / ${c}月`;
      }
      return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>App排名：<span>${this.rank} 名</span></p>
       <p>下载量：<span>${this.download} 万次</span></p>
      </div>`;
    },
  };
  retentionColumnTooltip = {
    headerFormat: '',
    crosshairs: true,
    pointFormatter: function pointFormatter() {
      return `<div class="chart-tooltip">
       <p>${this.year}年${this.category}</p>
       <p>网站排名：<span>${this.item}名</span></p>
      </div>`;
    },
  };
  setInvestmentTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.trendHg.xAxis.categories = investmentTrend.x.map(item => handleDate(item));
    this.trendHg.series = [{
      name: 'DAU (日活跃用户量) / 人',
      color: '#88C4FF',
      data: investmentTrend.seriesData.dau.map((item, i) => ({
        y: item,
        dau: item,
        exposure: Number(investmentTrend.exposure.data[i]),
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#F1FAFF',
      name: '曝光量',
      data: investmentTrend.exposure.data.map((item, i) => ({
        y: Number(item),
        dau: investmentTrend.seriesData.dau[i],
        exposure: Number(item),
        year: this.year,
      })),
      zIndex: 0,
      yAxis: 0,
      type: 'column',
    }];
    this.trendHg.options.series = this.trendHg.series;
  }

  setDownloadTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.downloadHg.xAxis.categories = investmentTrend.appRank.x.map(item => handleDate(item));
    this.downloadHg.series = [{
      name: 'App排名 / 位',
      color: '#9cd141',
      data: investmentTrend.appRank.data.map((item, i) => ({
        y: Number(item),
        rank: item,
        download: investmentTrend.download.data[i],
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }, {
      color: '#f1fae2',
      name: '下载量 / 万次',
      data: investmentTrend.download.data.map((item, i) => ({
        y: Number(item),
        rank: investmentTrend.appRank.data[i],
        download: item,
        year: this.year,
      })),
      zIndex: 0,
      yAxis: 0,
      type: 'column',
    }];
    this.downloadHg.options.series = this.downloadHg.series;
  }

  setWebsiteTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    this.websiteHg.xAxis.categories = investmentTrend.websiteRank.x.map(item => handleDate(item));
    this.websiteHg.series = [{
      name: '',
      color: '#cad1ff',
      data: investmentTrend.websiteRank.data.map((item) => ({
        y: Number(item),
        item,
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 1,
    }];
    this.websiteHg.options.series = this.websiteHg.series;
  }

  setTrend() {
    this.trendHg = {
      options: {
        legend: {
          align: 'right',
          verticalAlign: 'top',
          useHTML: true,
          margin: 30,
          y: 0,
          itemDistance: 10,
          labelFormatter: function labelFormatter() {
            return `<span class="kr-legend-item">
          <span style="background:${this.color}" class="kr-circle"></span
          ><span class="ellipsis">${this.name}</span>
          </span>`;
          },
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              fillColor: '#fff',
              lineColor: '#88C4FF',
              lineWidth: 2,
              radius: 3,
              symbol: 'circle',
              states: {
                hover: {
                  fillColor: '#88C4FF',
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          column: {
            states: {
              hover: {
                color: '#BBE4FF',
              },
            },
          },
          series: {
            tooltip: this.linecColumnTooltip,
          },
        },
        chart: {
          height: 270,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        text: '<h5 class="trend-title">用户量 / 曝光量</h5>',
      },
      xAxis: {
        tickWidth: 0,
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        tickPixelInterval: 34,
        labels: {
          format: '{value}万',
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        tickPixelInterval: 34,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
        },
        opposite: true,
      }],
    };
  }

  setDownload() {
    this.downloadHg = {
      options: {
        legend: {
          align: 'right',
          verticalAlign: 'top',
          useHTML: true,
          margin: 30,
          y: 0,
          itemDistance: 10,
          labelFormatter: function labelFormatter() {
            return `<span class="kr-legend-item">
          <span style="background:${this.color}" class="kr-circle"></span
          ><span class="ellipsis">${this.name}</span>
          </span>`;
          },
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              fillColor: '#fff',
              lineColor: '#9cd141',
              lineWidth: 2,
              radius: 3,
              symbol: 'circle',
              states: {
                hover: {
                  fillColor: '#9cd141',
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          column: {
            states: {
              hover: {
                color: '#9cd141',
              },
            },
          },
          series: {
            tooltip: this.downloadColumnTooltip,
          },
        },
        chart: {
          height: 270,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        text: '<h5 class="trend-title">App排名 / 下载量</h5>',
      },
      xAxis: {
        tickWidth: 0,
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
        categories: [],
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        tickPixelInterval: 34,
        labels: {
          format: '{value}',
        },
        title: {
          enabled: false,
        },
        opposite: true,
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        tickPixelInterval: 34,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
        },
        opposite: false,
      }],
    };
  }

  setWebsite() {
    this.websiteHg = {
      options: {
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              enabled: false,
              fillColor: '#fff',
              lineColor: '#cad1ff',
              lineWidth: 4,
              symbol: 'circle',
              states: {
                hover: {
                  radius: 2,
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                },
              },
            },
          },
          series: {
            tooltip: this.retentionColumnTooltip,
          },
        },
        chart: {
          height: 270,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        text: '<h5 class="trend-title">网站排名</h5>',
      },
      xAxis: {
        tickWidth: 1,
        tickInterval: 5,
        tickPosition: 'inside',
        lineColor: '#E7E7E7',
        gridLineWidth: 1,
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: '#ddd',
          dashStyle: 'LongDash',
        },
      },
      yAxis: [{
        lineColor: '#E7E7E7',
        gridLineColor: '#F2F4F5',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        tickInterval: 5,
        labels: {
          format: '{value}',
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: '#F2F4F5',
        lineColor: '#E7E7E7',
        lineWidth: 1,
        tickInterval: 4,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
        },
        opposite: false,
      }],
    };
  }

  handleRetention(d) {
    this.retentionList.forEach((item) => {
      const a = d[item.key];
      item.percent = a[a.length - 1].toFixed(2);
    });
    let index = 0;
    const width = 250;
    this.retentionList.forEach((item, i) => {
      if (this.retentionList[i].percent - this.retentionList[index].percent > 0) {
        index = i;
      }
    });
    this.retentionList.forEach((item, i) => {
      if (index === i) {
        item.width = width;
      } else {
        item.width = `${width * (item.percent / this.retentionList[index].percent)}px`;
      }
    });
  }

}
