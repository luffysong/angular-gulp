import krData from 'krData';
import ProductUserPortraits from './ProductUserPortraits';
const percent = krData.utls.percent;
const wanTooltip = {
  headerFormat: '',
  pointFormatter: function pointFormatter() {
    return `<div class="chart-tooltip">
       <p>${this.category}</p>
       <p>使用人数：<span>${this.y}万</span></p>
      </div>`;
  },
};
const percentToolTip = {
  headerFormat: '',
  pointFormatter: function pointFormatter() {
    return `<div class="chart-tooltip">
        <p>${this.category}：${this.y.toFixed(2)}%</p>
      </div>`;
  },
};
const trendHg = {
  options: {
    legend: {
      floating: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      y: 5,
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
        tooltip: wanTooltip,
      },
      column: {
        color: '#BBE4FF',
        tooltip: percentToolTip,
      },
    },
    title: {
      text: '<div><h4>使用时段</h4></div>',
      useHTML: true,
      align: 'left',
      margin: 40,
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
  yAxis: {
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
  },
};
export default class ProductUserPortraitsVM {
  constructor(data) {
    this.userPortraits = new ProductUserPortraits(data);
    this.data = this.userPortraits.getData();
    this.setGender(this.data.sex);
    this.setAge(this.data.age);
    this.setPeriodHg(this.data.freq);
    this.setDomainHg(this.data.area);
  }

  setGender(sex) {
    this.male = {
      percent: percent(sex.male),
      width: percent(sex.male / sex.max),
    };
    this.female = {
      percent: percent(sex.female),
      width: percent(sex.female / sex.max),
    };
  }

  setAge(age) {
    this.age = age.x.map(x => ({ x }));
    this.age.forEach((v, i) => {
      v.percent = percent(age.y[i]);
      v.width = percent(age.y[i] / age.max);
    });
  }

  setPeriodHg(freq) {
    this.periodCfg = angular.copy(trendHg);
    this.periodCfg.xAxis.categories = freq.x;
    this.periodCfg.xAxis.crosshair = {
      width: 1,
      color: '#ddd',
      dashStyle: 'LongDash',
    };
    this.periodCfg.series = [
      {
        data: freq.y,
        name: '使用时段/人数',
      },
    ];
  }

  setDomainHg(domain) {
    const domainCfg = angular.copy(trendHg);
    domainCfg.options.title.text = '<div><h4>地域分布</h4></div>';
    domainCfg.options.legend.enabled = false;
    domainCfg.xAxis.categories = domain.map(tuple => tuple[0]);
    domainCfg.yAxis.labels.format = null;
    domainCfg.series = [
      {
        data: domain.map(tuple => tuple[1]),
        type: 'column',
      },
    ];
    this.domainCfg = domainCfg;
  }

}

