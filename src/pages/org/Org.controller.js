import krData from 'krData';
import BaseInfoVM from './baseInfo.vm';
import MemberVM from './member.vm';
import InvestedCaseVM from './investedCase.vm';

@Inject('$stateParams', '$timeout', 'orgService','thirdpartyIndexService', 'resolveData')
export default class OrgController {
  years = [];
  year = new Date().getFullYear() - 1;
  linecColumnTooltip = {
    headerFormat: '',
    pointFormatter: function pointFormatter() {
      return `<div class="chart-tooltip">
       <p>${this.year}年 / ${this.category}</p>
       <p>投资金额：￥<span>${this.item.investAmount}万</span></p>
       <p>投资案例：<span>${this.item.investCase}个</span></p>
      </div>`;
    },
  };
  trendHg = {
    options: {
      legend: {
        floating: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        y: 0,
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
            symbol: 'circle',
            states: {
              hover: {
                radius: 4,
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
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        text: '<h5 class="trend-title">投资规模及案例数趋势</h5>',
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
    xAxis: {
      tickWidth: 0,
      lineColor: '#E7E7E7',
      gridLineWidth: 1,
      gridLineColor: '#F2F4F5',
      gridLineDashStyle: 'longdash',
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
        format: '{value}个',
      },
      opposite: true,
    }],
  };

  industryHg = {
    options: {
      credits: {
        enabled: false,
      },
      legend: {
        floating: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        y: 0,
        symbolHeight: 8,
        symbolWidth: 8,
        itemMarginTop: 4,
        lineHeight: 18,
        itemStyle: {
          fontSize: '12px',
          color: '#5a626d',
        },
      },
      chart: {
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        width: 220,
        height: 140,
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
                  `<li>${item.name}：共${item.count}个，占${item.proportion}</li>`
                );
                const otherHtml = `<ul>${otherList.join('')}</ul>`;
                return `<div class="chart-tooltip"><p>其他</p>${otherHtml}</div>`;
              }
              return `<div class="chart-tooltip"><p>${this.name}</p>共${this.total}个，
              占${this.percentage.toString().slice(0, 4)}%</div>`;
            },
          },
          showInLegend: true,
          colors: ['#88C4FF', '#BBE4FF',
            '#CAD1FF', '#FFD46B',
            '#B3DD6A', '#9DE3D9',
          ],
          size: 120,
          center: [50, 50],
          dataLabels: {
            enabled: false,
          },
        },
      },
    },
    title: {
      y: 65,
      x: -40,
      align: 'center',
      style: {
        fontSize: '12px',
        color: '#5a626d',
        lineHeight: 18,
      },
    },
  };

  phaseHg = {
  };

  constructor() {
    const orgData = this.resolveData.orgData;
    this.orgData = orgData;
    this.init();
    this.id = orgData.basic.id;
    this.analyze = orgData.analyze;
    angular.extend(this, this.orgData);
    this.years = krData.utls.fromYear(this.orgData.analyze.initParam.earliestYear);
    /* 因2017无数据,暂时删除2017 */
    if (this.years.indexOf(2017) >= 0) {
      this.years.splice(this.years.indexOf(2017), 1);
    }
    this.changeCondition();
    this.renderChart();
  }

  // init() {
  //   this.init();
  // }
  // orgData = this.resolveData.orgData;
  // console.log(orgData);
  init() {
    if (this.orgData) {
      this.baseInfoVM = new BaseInfoVM(this.orgData);
      this.memberVM = new MemberVM(this.orgData);
      this.investedCaseVM = new InvestedCaseVM();
      //查询服务项目
      this.queryServePros();
    }
    angular.copy(this.industryHg, this.phaseHg);
  }

  changeCondition() {
    this.loadAnalyze();
  }

  renderChart() {
    if (this.analyze.hasData) {
      this.setInvestIndustry(this.analyze.investedIndustry);
      this.setInvestPhase(this.analyze.investedPhase);
    }
    this.setTrend(this.analyze.investmentTrend);
  }

  loadAnalyze() {
    this.orgService.analyze({
      id: this.id,
      industry: this.industry,
      phase: this.phase,
      year: this.year,
    }).then(data => {
      this.analyze = data;
      console.log(data);
      this.renderChart();
    });
  }

  setInvestPhase(investPhaseObj) {
    const investPhase = investPhaseObj.investedPhases;
    const MAX_COUNT = 5;
    const phase5 = investPhase.slice(0, MAX_COUNT);
    if (investPhaseObj.investedPhaseCount > MAX_COUNT) {
      const other = this.getOther(investPhase);
      other.other.list = other.otherList;
      phase5.push(other.other);
    }

    this.phaseHg.series = [{
      data: phase5.map(item => ({
        name: item.name,
        y: item.count,
        item,
      })),
      type: 'pie',
      name: `共投资${investPhaseObj.investedPhaseCount}个轮次`,
      innerSize: '70%',
    }];
    this.phaseHg.title.text = `共投资<br>${investPhaseObj.investedPhaseCount}个轮次`;
  }

  setInvestIndustry(investIndustryObj) {
    const investIndustry = investIndustryObj.investedIndustries;
    const MAX_COUNT = 5;
    const industry5 = investIndustry.slice(0, MAX_COUNT);
    if (investIndustryObj.investedIndustryCount > MAX_COUNT) {
      const other = this.getOther(investIndustry);
      other.other.list = other.otherList;
      industry5.push(other.other);
    }
    this.industryHg.series = [{
      data: industry5.map(item => ({
        name: item.name,
        y: item.count,
        item,
      })),
      type: 'pie',
      name: `共投资${investIndustryObj.investedIndustryCount}个行业`,
      innerSize: '70%',
    }];
    this.industryHg.title.text = `共投资<br>${investIndustryObj.investedIndustryCount}个行业`;
  }

  getOther(arr) {
    const MAX_LENGTH = 5;
    const other = arr.slice(MAX_LENGTH);
    return {
      other: other.reduce((pre, current) => (
        {
          count: pre.count + current.count,
          name: '其他',
        }
      ), { count: 0 }),
      otherList: other,
    };
  }
  setTrend(investmentTrend) {
    if (!investmentTrend) {
      investmentTrend = [];
      for (let i = 0, len = 12; i < len; i++) {
        investmentTrend.push({
          investAmount: 0,
          investCase: 0,
          x: `${i + 1}月`,
        });
      }
    }
    this.trendHg.xAxis.categories = investmentTrend.map(item => item.x);
    this.trendHg.series = [{
      name: '投资金额 / 万',
      color: '#F1FAFF',
      data: investmentTrend.map((item) => ({
        y: item.investAmount,
        item,
        year: this.year,
      })),
      yAxis: 0,
      zIndex: 0,
      type: 'column',
    },
    {
      color: '#88C4FF',
      name: '投资案例 / 个',
      data: investmentTrend.map((item) => ({
        y: item.investCase,
        item,
        year: this.year,
      })),
      zIndex: 1,
      lineWidth: 1,
      yAxis: 1,
    },
    ];
    this.trendHg.options.series = this.trendHg.series;
  }

  queryServePros(id,page, size){
    let params = {
      id:id || this.$stateParams.id,
      page:page || 1,
      pageSize: size || 5,
    }
    this.thirdpartyIndexService.queryCompanys(params).then((data) =>{
      this.servePros = data;
      if (data.page * data.pageSize < data.totalCount) {
          this.hasMoreServedPros = true;
      } else {
        this.hasMoreServedPros = false;
      }
    });
  }

  loadMoreServedPros(){
    this.queryServePros(this.servePros.id,null,1000);
  }
}
