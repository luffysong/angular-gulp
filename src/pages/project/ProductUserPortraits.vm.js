import krData, { utls } from 'krData';
import ProductUserPortraits from './ProductUserPortraits';
const percent = krData.utls.percent;

function getWanText(num, fixed = false) {
  let unit = '';
  if (num > 10000) {
    num /= 10000;
    unit = '万';
    num = num.toFixed(2);
  } else if (fixed) {
    num = num.toFixed(2);
  }
  return {
    num,
    unit,
    text: num + unit,
  };
}
const wanTooltip = {
  headerFormat: '',
  pointFormatter: function pointFormatter() {
    return `<div class="chart-tooltip">
       <p>${this.category}</p>
       <p>使用人数：<span>${getWanText(this.y).text}</span></p>
      </div>`;
  },
};
const wanLabel = {
  formatter: function yAxisLabelFormatter() {
    const wanNum = getWanText(this.value);
    if (parseFloat(wanNum.num) === parseInt(wanNum.num, 10)) {
      wanNum.num = parseInt(wanNum.num, 10);
    }
    return wanNum.num + wanNum.unit;
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
const noDataLables = {
  style: {
    color: '#ccc',
  },
  autoRotation: 0,
};
const trendHg = {
  options: {
    legend: {
      floating: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      y: 5,
      useHTML: true,
      margin: 30,
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
    noData: {
      style: {
        fontFamily: 'inherit',
        fontSize: '18px',
        color: '#ccc',
        fontWeight: 'normal',
      },
      useHTML: true,
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
      spacingLeft: 0,
    },
    tooltip: {
      useHTML: true,
      backgroundColor: 'transparent',
      shadow: false,
      borderWidth: 0,
      padding: 0,
    },
    xAxis: {
      tickWidth: 0,
      lineColor: '#E7E7E7',
      gridLineWidth: 1,
      gridLineColor: 'transparent',
      gridLineDashStyle: 'longdash',
      labels: {
        autoRotation: 0,
      },
    },
    yAxis: {
      lineColor: '#E7E7E7',
      gridLineColor: '#F2F4F5',
      gridLineDashStyle: 'longdash',
      lineWidth: 1,
      tickPixelInterval: 34,
      labels: wanLabel,
      title: {
        enabled: false,
      },
    },
  },
};
export default class ProductUserPortraitsVM {
  constructor(data) {
    this.userPortraitsData = data;
    this.init();
  }

  init() {
    if (!this.userPortraitsData || utls.isEmpty(this.userPortraitsData.chart)) {
      this.hasData = false;
      return;
    }
    this.hasData = true;
    this.userPortraits = new ProductUserPortraits(this.userPortraitsData);
    this.data = this.userPortraits.getData();
    if (this.data.sex) {
      this.setGender(this.data.sex);
    }
    if (this.data.age) {
      this.setAge(this.data.age);
    }
    this.setPeriodHg(this.data.freq);
    this.setDomainHg(this.data.area);
  }
  setGender(sex) {
    if (!sex) {
      this.noGender = true;
      this.male = {
        percent: '0.00%',
        width: '100%',
      };
      this.female = this.male;
    }
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
      v.width = percent(Math.max(age.y[i] / age.max, 0.004));
    });
  }

  setPeriodHg(freq) {
    this.periodCfg = angular.copy(trendHg);
    const x = this.periodCfg.options.xAxis;
    const y = this.periodCfg.options.yAxis;
    if (!freq) {
      x.categories = utls.range(0, 23, '时');
      x.min = 0;
      x.max = 23;
      y.min = 0;
      y.max = 1000000;
      this._setNoDataChart(this.periodCfg, x, y);
      this.periodCfg.options.legend.enabled = false;
      return;
    }
    x.categories = freq.x;
    x.crosshair = {
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

  _setNoDataChart(cfg, x, y) {
    cfg.series = [{
      data: [],
    }];
    x.gridLineWidth = 0;
    x.tickWidth = 1;
    x.tickColor = '#ddd';
    angular.extend(x.labels, noDataLables);
    angular.extend(y.labels, noDataLables);
  }
  setDomainHg(domain) {
    this.domainCfg = angular.copy(trendHg);
    const domainCfg = this.domainCfg;
    const y = this.domainCfg.options.yAxis;
    const x = this.domainCfg.options.xAxis;
    domainCfg.options.title.text = '<div><h4>地域分布</h4></div>';
    y.min = 0;
    if (!domain) {
      y.max = 100;
      this._setNoDataChart(domainCfg, x, y);
      return;
    }
    x.categories = domain.map(tuple => tuple[0]);
    y.labels.formatter = null;
    domainCfg.series = [
      {
        data: domain.map(tuple => tuple[1]),
        type: 'column',
        name: '所在地/百分比',
        maxPointWidth: 20,
      },
    ];
  }

}

