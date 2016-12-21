import krData from 'krData';
import ProjectService from '../project/project.service';
import noDataFactory from '../../bower/highcharts/modules/no-data-to-display.src.js';
class TestAPI extends krData.API {

}

@Inject('labelIndexService', '$timeout', '$window', '$stateParams', '$state', '$scope', 'user')
export default class listParentController {

  constructor() {
    noDataFactory(Highcharts);
    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
        noData: '暂无数据',
      },
    });
    this.api = new TestAPI();
    this.init();
    this.initChart();
  }

  projectService = new ProjectService();

  init() {
    this.isInvestor = this.user.isInvestor();
    this.labelLoading = true;
    this.params = {};
    this.labelDetail = {};
    this.open = {
      filter: false,
    };
    this.seeAll = true;

    this.itemList = [
      {
        name: 'phase',
        key: 'value',
      }, {
        name: 'city',
        key: 'id',
      }, {
        name: 'isFundingLimit',
        key: 'id',
      },
    ];

    this.data = {
      city:[],
      isFundingLimit: [
        {
          id: 'unlimited',
          name: "不限",
        }, {
          id: 1,
          name: "融资中",
        }
      ]
    };

    this.$scope.$on('get-change', (e, d) => {
      angular.extend(this.params, d);
      this.getLabelStat();
      var params = Object.assign({labelId: this.params.labelId},this.paramsFilter(this.params));
      this.projectService.getLabel(params).then(data => {
        this.labelDetail = data;
      });

      this.projectService.getLabelCompany(params).then(data => {
        this.labelDetail.totalCount = data.pageData.totalCount;
        this.$scope.$broadcast('get-list',data.pageData);
        this.handleActive();
        this.updateData(data);
      });

      this.handleActive();
    });

    this.$scope.$on('open-sideBar',(e,d) => {
      d.labelName = this.labelDetail.name;
      this.columnOptions = d;
      this.open.sideBar = true;
    });

    this.getCity();

    this.getPhase();

    //this.getisFundingLimit();

  }

  /*关注、取消关注标签*/
  followLabel() {
    if(this.labelDetail.isFollowed) {
      this.projectService.unFollowLabel({
        id: this.params.labelId
      }).then(data => {
        krData.Alert.success('取消关注成功');
        this.labelDetail.isFollowed = false;
      }).catch(err => {
        krData.Alert.alert(`出错啦：${err.msg || '未知错误'}`);
      });
    }else {
      this.projectService.followLabel({
        id: this.params.labelId
      }).then(data => {
        krData.Alert.success('关注成功');
        this.labelDetail.isFollowed = true;
      }).catch(err => {
        krData.Alert.alert(`出错啦：${err.msg || '未知错误'}`);
      });
    }
  }
  /*过滤不限条件*/
  paramsFilter(target) {
    var o = Object.assign({},target);
    Object.keys(o).forEach((item) => {
      if(o[item] === 'unlimited'){
        delete o[item];
      }
    });
    return o;
  }

  /*通过接口返回数据更新筛选器数字*/
  updateData(d) {
    Object.keys(this.data).forEach(item => {
      if(item !== 'label') {
        angular.forEach(this.data[item],obj => {
          obj.cnt = 0;
        });
      }
    });
    angular.forEach(this.itemList,(item) => {
      /*筛选条件特殊处理*/
      if(item.name === 'isFundingLimit'){
        angular.forEach(d.funding,(c,index) => {
          angular.forEach(this.data['isFundingLimit'],k => {
            if(k.name === c.name || k.id+'' === c.id+'') {
              k.cnt = c.cnt;
            }
          })
        });
        return;
      }
      if(!d[item.name].length)return;
      angular.forEach(d[item.name],(obj) => {
        angular.forEach(this.data[item.name],(c) => {
          if((c[item.key] && c[item.key] === obj[item.key]) || (obj.name === '不限' && (c.name === '不限' || c.desc === '不限'))){
            c.cnt = obj.cnt;
          }
        });
      })
    })
  }

  /*根据路由参数处理激活*/
  handleActive () {
    this.dataInit();
    angular.forEach(this.params,(val,key) => {
      if(val && val.split(',').length > 1){
        angular.forEach(val.split(','),(a) => {
          angular.forEach(this.data[key],(item,index) => {
            if(item.value+'' === a+'' || item.id+'' === a+'') {
              item.active = true;
            }
          });
        });
      }else {
        angular.forEach(this.data[key],(item,index) => {
          if(item.value+'' === val+'' || item.id+'' === val+'') {
            item.active = true;
          }
        });
      }
    });
    this.handleLabel();
  }

  /*收起筛选器展示已选择的标签*/
  handleLabel() {
    var temp = {
      phase: 'desc',
      city: 'name',
      isFundingLimit: 'name'
    };
    this.filterData = {};
    Object.keys(this.data).forEach(key => {
      angular.forEach(this.data[key], item => {
        if(item.active && item.value !== 'unlimited' && item.id !== 'unlimited') {
          if(this.filterData[key]) {
            this.filterData[key] += ','+item[temp[key]];
          }else {
            this.filterData[key] = item[temp[key]];
          }
        }
      });
    });
  }

  /*筛选器选择*/
  selectIndustry (index,type) {
    /*筛选器选择不限*/
    if(this.data[type][index].name === '不限' || this.data[type][index].desc === '不限') {
      this.params[type] = 'unlimited';
      this.go();
      return;
    }
    var attr = type === 'city' || type === 'isFundingLimit' || type === 'label' ? 'id' : 'value';
    if(this.params[type]){
      if(this.params[type].split(',').indexOf(String(this.data[type][index][attr])) < 0) {
        var arr = this.params[type].split(',');
        if(arr.indexOf('unlimited') >= 0){arr.splice(arr.indexOf('unlimited'),1)};
        arr.push(this.data[type][index][attr]);
        this.params[type] = arr.join(',');
      }
    }else {
      this.params[type] = this.data[type][index][attr];
    }
    this.go();
  }

  /*筛选器展开*/
  spreadMore(type) {
    this.open[type] = !this.open[type];
  };

  /*取消选择行业*/
  clearIndustry(id, type) {
    var arr = this.params[type].split(',');
    arr.splice(arr.indexOf(id+''),1);
    this.params[type] = arr.join(',');
    /*this.params[type] = null;*/
    this.go();
  }

  /*state跳转*/
  go() {
    this.$state.go('label.result', this.params);
  }

  /*增加默认数据*/
  addItem(obj, type) {
    if (!obj || !obj.concat) return;
    var temp = obj.concat();
    var c = {
      active: false,
      id: 0,
      value: 'unlimited'
    };
    if( type === 'city'){
      c.name = '不限';
    } else {
      c.desc = '不限';
    }
    temp.unshift(c);
    return temp;
  }

  /*数据active全部初始化*/
  dataInit () {
    Object.keys(this.data).forEach((item) => {
      angular.forEach(this.data[item],(obj) => {
        obj.active = false;
      });
      if(!this.params[item] && this.data[item].length) {
        this.data[item][0].active = true;
      }
    });
  };

  /*获取静态城市数据*/
  getCity() {
    this.projectService.getArea(0)
      .then(data => {
        this.data.city = this.addItem(data,'city');
        this.handleActive();
      });

  }

  /*获取轮次静态数据*/
  getPhase() {
    this.data.phase = this.addItem(this.$scope.root.COMPANY_SEARCH_PHASE_META);
  }

  getLabelStat() {
    this.projectService.getLabelStat({
      labelId: this.params.labelId,
    }).then(data => {
      console.log(data);
      this.labelStat = data;
      this.setTitle();
      this.loadChart();
      this.setTrend(this.labelStat.comIncrTrend);
      this.setInvest(this.labelStat);
      this.handleData(this.labelStat);
      this.labelLoading = false;
      this.$timeout(() => this.handleRetention(), 100);

    });
  }

  setTitle() {
    function handleDate(date) {
      return `${date.slice(0, 4)}.${date.slice(4, 6)}`;
    }
    this.trendHg.title.text = `
    <h5 class="chart-title">项目年度趋势</h5>
    <h5 class="trend-title">
      ${handleDate(this.labelStat.comIncrTrend.x[0])} -
      ${handleDate(this.labelStat.comIncrTrend.x[this.labelStat.comIncrTrend.x.length - 1])}
    </h5>`;
    this.investHg.title.text = `
    <h5 class="chart-title">投资金额 / 投资事件年度趋势</h5>
    <h5 class="trend-title">
      ${handleDate(this.labelStat.investFundIncrTrend.x[0])} -
      ${handleDate(this.labelStat.comIncrTrend.x[this.labelStat.investFundIncrTrend.x.length - 1])}
    </h5>`;
  }

  initChart() {
    this.investColumnTooltip = {
      headerFormat: '',
      crosshairs: true,
      pointFormatter: function pointFormatter() {
        function handleDate(date) {
          if (!date || !date.length || !date.slice) return;
          const l = date.length;
          const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
          return `${date.slice(0, 4)}年${c}月`;
        }
        return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>投资事件：<span>${this.case}个</span></p>
       <p>投资金额：<span>${this.amount}万</span></p>
      </div>`;
      },
    };
    this.trendColumnTooltip = {
      headerFormat: '',
      crosshairs: true,
      pointFormatter: function pointFormatter() {
        function handleDate(date) {
          if (!date || !date.length || !date.slice) return;
          const l = date.length;
          const c = date.slice(l - 2, l) > 9 ? date.slice(l - 2, l) : date.slice(l - 1, l);
          return `${date.slice(0, 4)}年${c}月`;
        }
        return `<div class="chart-tooltip">
       <p>${handleDate(this.category)}</p>
       <p>项目趋势：<span>${this.item}个</span></p>
      </div>`;
      },
    };
    this.comPhaseHg = {
      options: {
        credits: {
          enabled: false,
        },
        legend: {
          floating: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          y: 0,
          symbolHeight: 8,
          symbolWidth: 8,
          itemMarginTop: 4,
          lineHeight: 18,
          symbolRadius: 0,
          itemHoverStyle: {
            color: '#ccc',
          },
          itemStyle: {
            fontSize: '12px',
            color: '#fff',
          },
        },
        chart: {
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0,
          width: 230,
          height: 150,
          backgroundColor: 'transparent',
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
        plotOptions: {
          size: '100%',
          pie: {
            states: {
              hover: {
                enabled: false,
              },
            },
            tooltip: {
              headerFormat: '',
              pointFormatter: function pointFormmater() {
                if (this.name === '其他') {
                  const otherList = this.item.list.map(item =>
                    `<li>${item.name}：占${item.proportion}</li>`
                  );
                  const otherHtml = `<ul>${otherList.join('')}</ul>`;
                  return `<div class="chart-tooltip"><p>其他</p>${otherHtml}</div>`;
                }
                return `<div class="chart-tooltip">${this.name}，占${this.percentage.toString().slice(0, 4)}%</div>`;
              },
            },
            showInLegend: true,
            colors: ['#88C4FF', '#BBE4FF',
              '#CAD1FF', '#FFD46B',
              '#B3DD6A', '#9DE3D9',
            ],
            size: 120,
            center: [50, 50],
            borderColor: 'transparent',
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
      title: {
        y: 65,
        x: -45,
        align: 'center',
        style: {
          fontSize: '12px',
          color: '#fff',
          lineHeight: 18,
        },
      },
    };
    this.investPhaseHg = {
      options: {
        credits: {
          enabled: false,
        },
        legend: {
          floating: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          y: 0,
          symbolHeight: 8,
          symbolWidth: 8,
          itemMarginTop: 4,
          lineHeight: 18,
          symbolRadius: 0,
          itemHoverStyle: {
            color: '#ccc',
          },
          itemStyle: {
            fontSize: '12px',
            color: '#fff',
          },
        },
        chart: {
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0,
          width: 230,
          height: 150,
          backgroundColor: 'transparent',
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          padding: 0,
        },
        plotOptions: {
          size: '100%',
          pie: {
            states: {
              hover: {
                enabled: false,
              },
            },
            tooltip: {
              headerFormat: '',
              pointFormatter: function pointFormmater() {
                if (this.name === '其他') {
                  const otherList = this.item.list.map(item =>
                    `<li>${item.name}：占${item.proportion}</li>`
                  );
                  const otherHtml = `<ul>${otherList.join('')}</ul>`;
                  return `<div class="chart-tooltip"><p>其他</p>${otherHtml}</div>`;
                }
                return `<div class="chart-tooltip">${this.name}，占${this.percentage.toString().slice(0, 4)}%</div>`;
              },
            },
            showInLegend: true,
            colors: ['#88C4FF', '#BBE4FF',
              '#CAD1FF', '#FFD46B',
              '#B3DD6A', '#9DE3D9',
            ],
            size: 120,
            center: [50, 50],
            borderColor: 'transparent',
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
      title: {
        y: 65,
        x: -45,
        align: 'center',
        style: {
          fontSize: '12px',
          color: '#fff',
          lineHeight: 18,
        },
      },
    };
    this.trendHg = {
      options: {
        legend: {
          align: 'right',
          verticalAlign: 'top',
          useHTML: true,
          y: 15,
          itemDistance: 10,
          itemStyle: {
          },
          symbolWidth: 10,
          symbolHeight: 5,
          labelFormatter: function labelFormatter() {
            return `<span class="kr-legend-item">
            项目趋势 / ?
            </span>`;
          },
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          line: {
            lineWidth: 2,
            states: {
              hover: {
                halo: {
                  size: 0,
                },
              },
            },
            marker: {
              enabled: false,
              fillColor: '#fff',
              lineColor: '#cad1ff',
              lineWidth: 2,
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
            tooltip: this.trendColumnTooltip,
          },
        },
        chart: {
          width: 280,
          height: 240,
          backgroundColor: 'transparent',
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
        margin: 35,
        text:
          `<h5 class="chart-title">项目年度趋势</h5>
          <h5 class="trend-title">${this.trendPeriod}</h5>`,
      },
      xAxis: {
        tickWidth: 0,
        tickInterval: 1,
        tickPosition: 'inside',
        lineColor: 'transparent',
        gridLineWidth: 1,
        gridLineColor: '#5a626d',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: 'transparent',
        },
        labels: {
          useHTML: true,
          autoRotation: 0,
          enabled: false,
          step: 4,
          style: {
            whiteSpace: 'nowrap',
            color: '#ccc',
          },
        },
      },
      yAxis: [{
        lineColor: 'transparent',
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          enabled: false,
        },
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: 'transparent',
        lineColor: 'transparent',
        lineWidth: 1,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
          style: {
            color: '#ccc',
          },
        },
        opposite: false,
      }],
    };
    this.investHg = {
      options: {
        legend: {
          floating: true,
          align: 'right',
          verticalAlign: 'top',
          layout: 'vertical',
          useHTML: true,
          y: -7,
          itemMarginBottom: 8,
          itemStyle: {

          },
          symbolWidth: 10,
          symbolHeight: 5,
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
            lineWidth: 2,
            states: {
              hover: {
                lineWidth: 2,
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
            tooltip: this.investColumnTooltip,
          },
          column: {
            stacking: 'normal',
            states: {
              hover: {
                color: '#88c4ff',
              },
            },
          },
        },
        chart: {
          width: 330,
          height: 240,
          backgroundColor: 'transparent',
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
        margin: 35,
        text: `<h5 class="chart-title">投资金额 / 投资事件年度趋势</h5>
               <h5 class="trend-title">${this.investPeriod}</h5>`,
      },
      xAxis: {
        tickWidth: 0,
        tickInterval: 1,
        tickPosition: 'inside',
        lineColor: 'transparent',
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        crosshair: {
          width: 1,
          color: 'transparent',
        },
        labels: {
          /*autoRotation: 0,*/
          enabled: false,
          useHTML: true,
          style: {
            whiteSpace: 'nowrap',
            color: '#ccc',
          },
        },
      },
      yAxis: [{
        lineColor: 'transparent',
        gridLineColor: 'transparent',
        gridLineDashStyle: 'longdash',
        lineWidth: 1,
        labels: {
          enabled: false,
          format: '{value}',
          style: {
            color: '#000',
          },
        },
        title: {
          enabled: false,
        },
        reversedStacks: false,
      }, {
        gridLineDashStyle: 'longdash',
        gridLineColor: 'transparent',
        lineColor: 'transparent',
        lineWidth: 1,
        title: {
          enabled: false,
        },
        labels: {
          format: '{value}',
          style: {
            color: '#ccc',
          },
        },
        opposite: false,
      },
      ],
    };
  }

  handleRetention() {
    const arr = this.labelStat.comStartDateDis.map(item => item.value);
    const max = Math.max(...arr);
    const width = 140;
    this.labelStat.comStartDateDis.forEach(item => {
      if (item.value === max) {
        item.width = width;
      } else {
        item.width = `${width * (item.value / max)}px`;
      }
    });
  }

  loadChart() {
    console.log(this.labelStat.investPhaseDis);
    this.investPhaseHg.series = [{
      data: this.labelStat.investPhaseDis.slice(0, 6).map(item => ({
        name: item.key,
        y: item.value,
        item,
      })),
      type: 'pie',
      name: `共投资${5}个轮次`,
      innerSize: '85%',
    }];
    this.investPhaseHg.title.text = `共投资<br>${5}个轮次`;
    this.comPhaseHg.series = [{
      data: this.labelStat.comPhaseDis.slice(0, 6).map(item => ({
        name: item.key,
        y: item.value,
        item,
      })),
      type: 'pie',
      name: `共投资${5}个轮次`,
      innerSize: '85%',
    }];
    this.comPhaseHg.title.text = `共投资<br>${5}个轮次`;
  }

  setTrend(investmentTrend) {
    function handleDate(date) {
      return `${date.slice(0, 4)}.${date.slice(4, 6)}`;
    }
    this.trendHg.xAxis.categories = investmentTrend.x.map(item => handleDate(item));
    this.trendHg.series = [{
      name: '',
      color: '#88c4ff',
      data: investmentTrend.y.map((item) => ({
        y: Number(item),
        item,
        year: this.year,
      })),
      yAxis: 1,
      zIndex: 1,
      lineWidth: 2,
    }];
    this.trendHg.options.series = this.trendHg.series;
  }

  setInvest(investmentTrend) {
    console.log(investmentTrend);
    function handleDate(date) {
      return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    const arr = investmentTrend.investCaseIncrTrend.x &&
    investmentTrend.investCaseIncrTrend.x.length ?
    investmentTrend.investCaseIncrTrend.x : investmentTrend.investFundIncrTrend.x;
    this.investHg.xAxis.categories = arr.map(item => handleDate(item));
    this.investHg.series = [
      {
        name: '投资事件 / ?',
        color: '#b3dd6a',
        data: investmentTrend.investCaseIncrTrend.y.map((item, i) => ({
          y: Number(item),
          case: (item && item !== 'null') ? item : 0,
          amount: investmentTrend.investFundIncrTrend.y[i],
          year: this.year,
        })),
        yAxis: 1,
        zIndex: 1,
        lineWidth: 2,
      }, {
        color: '#617b97',
        name: '投资金额 / 万元',
        data: investmentTrend.investFundIncrTrend.y.map((item, i) => ({
          y: Number(item),
          case: investmentTrend.investCaseIncrTrend.y[i] &&
          investmentTrend.investCaseIncrTrend.y[i] !== 'null' ?
            investmentTrend.investCaseIncrTrend.y[i] : 0,
          amount: item || 0,
          year: this.year,
        })),
        zIndex: 0,
        yAxis: 0,
        borderColor: 'transparent',
        type: 'column',
        pointWidth: 8,
        hover: {
          color: '#000',
        },
      }, {
        color: '#4c5460',
        name: '',
        data: investmentTrend.investFundIncrTrend.y.map((item, i) => ({
          y: Math.max(...investmentTrend.investFundIncrTrend.y),
          case: investmentTrend.investCaseIncrTrend.y[i] &&
          investmentTrend.investCaseIncrTrend.y[i] !== 'null' ?
            investmentTrend.investCaseIncrTrend.y[i] : 0,
          amount: item || 0,
          year: this.year,
        })),
        zIndex: 0,
        yAxis: 0,
        borderColor: 'transparent',
        type: 'column',
        stacking: 'percent',
        pointWidth: 8,
        showInLegend: false,
        enableMouseTracking: false,
      },
    ];
    this.investHg.options.series = this.investHg.series;
  }

  handleData(d) {
    const dict = [
      {
        name: ['comIncrTrend'],
        target: this.trendHg,
        empty: true,
      }, {
        name: ['investFundIncrTrend', 'investCaseIncrTrend'],
        target: this.investHg,
        empty: true,
      },
    ];
    dict.forEach(item => {
      item.name.forEach(obj => {
        if (d[obj].y.length) {
          item.empty = false;
        }
      });
      if (item.empty) {
        this._setNoDataConfig(item.target);
      }
    });
    if (!d.comStartDateDis.length) {
      this.saveEmpty = true;
    }

  }

  _setNoDataConfig(cfg) {
    const x = cfg.xAxis;
    const y = cfg.yAxis[1];

    // 无数据时 强制X Y周
    x.min = 0;
    x.max = 11;
    x.categories = [
      '2015-12',
      '2016-01',
      '2016-02',
      '2016-03',
      '2016-04',
      '2016-05',
      '2016-06',
      '2016-07',
      '2016-08',
      '2016-09',
      '2016-10',
      '2016-11',
    ];
    y.min = 0;
    y.max = 100;
  }

  orderBySortField(sortField){
    this.params['sortField'] = sortField;
    if(sortField === 'STOCK_AT'){
        this.isStockAt = true;
        this.isTagsRank = false;
        this.isUserAmount = false;
        this.isExposureAmount = false;
        this.isStartDate = false;
    }else if(sortField === 'START_DATE'){
        this.isStockAt = false;
        this.isTagsRank = false;
        this.isUserAmount = false;
        this.isExposureAmount = false;
        this.isStartDate = true;
    }else if(sortField === 'TAGS_RANK'){
        this.isStockAt = false;
        this.isTagsRank = true;
        this.isUserAmount = false;
        this.isExposureAmount = false;
        this.isStartDate = false;
    }else if(sortField === 'USER_AMOUNT'){
        this.isStockAt = false;
        this.isTagsRank = false;
        this.isUserAmount = true;
        this.isExposureAmount = false;
        this.isStartDate = false;
    }else if(sortField === 'EXPOSURE_AMOUNT'){
        this.isStockAt = false;
        this.isTagsRank = false;
        this.isUserAmount = false;
        this.isExposureAmount = true;
        this.isStartDate = false;
    }
    this.go();
  }
}

