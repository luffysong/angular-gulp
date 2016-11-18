import { utls } from 'krData';
import { FID_KEY } from './WorkstationCompare.service';
const getService = utls.getService;
let service = null;
const LABEL_DESC = {
  dau: 'DAU数据',
  download: '下载数据',
  uninstall: '卸载数据',
  save: '一日留存率',
  save3: '三日留存率',
  save7: '七日留存率',
  save30: '月留存率',
};
const wanYLabel = {
  format: '{value}万',
};

const percentYLabel = {
  format: '{value}%',
};

function getLableDesc(key) {
  return LABEL_DESC[key];
}
function getLabel(key) {
  switch (key) {
    case FID_KEY.dau:
    case FID_KEY.download:
    case FID_KEY.uninstall:
      return wanYLabel;
    default:
      return percentYLabel;
  }
}

function getUnit(key) {
  if (key.indexOf('save') > -1) {
    return '%';
  }
  return '万';
}
function getHichartsOptions(key) {
  return {
    colors: ['#88C4FF', '#B3DD6A', '#CAD1FF', '#FFD46B', '#9DE3D9'],
    tooltip: {
      shared: true,
      backgroundColor: 'rgba(150,159,169,1)',
      borderColor: 'rgba(150,159,169,1)',
      crosshairs: true,
      valueDecimals: 2,
      padding: 0,
      headerFormat: `<span class="label-row"><span class="mr6">{point.key}</span>
        ${getLableDesc(key)} </span> `,
      pointFormat:
      '<span class="label-row"><span class="tooltip-icon" style="color:{point.color}">\u25CF' +
      `</span> {series.name}：{point.y}${getUnit(key)}</span>`,
      useHTML: true,
      style: {
        color: '#fff',
        fontSize: '12px',
      },
    },
    chart: {
      width: 940,
      height: 340,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
      float: true,
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      useHTML: true,
      margin: 30,
      y: 0,
      itemDistance: 10,
      labelFormatter: function labelFormatter() {
        return `<span class="kr-legend-item">
          <span style="background:${this.color}" class="kr-circle"></span><span>${this.name}</span>
          </span>`;
      },
    },
    plotOptions: {
      series: {
        marker: {
          lineWidth: 1,
        },
      },
      line: {
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
          symbol: 'circle',
          lineWidth: 1,
          states: {
            hover: {
              radius: 4,
              radiusPlus: 0,
              lineWidthPlus: 0,
            },
          },
        },
      },
    },
    xAxis: {
      lineWidth: 2,
      tickColor: '#ddd',
      tickWidth: 1,
      lineColor: '#E7E7E7',
      crosshair: {
        width: 1,
        color: '#ddd',
        dashStyle: 'LongDash',
      },
    },
    yAxis: [{
      lineColor: '#E7E7E7',
      labels: getLabel(FID_KEY[key]),
      gridLineColor: '#F2F4F5',
      gridLineDashStyle: 'longdash',
      lineWidth: 2,
      tickPixelInterval: 51,
      title: {
        enabled: false,
      },
    },
    // {
    //   lineColor: '#E7E7E7',
    //   lineWidth: 2,
    //   opposite: true,
    //   title: {
    //     enabled: false,
    //   },
    // }
    ],
  };
}
@Inject('$stateParams', '$scope')
export default class WorkstationCompareController {

  constructor() {
    service = getService('workstationCompareService');
    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
      },
    });
    this.orginGetMarkPath = Highcharts.Tick.prototype.getMarkPath;
    Highcharts.wrap(Highcharts.Tick.prototype, 'getMarkPath',
     (prev, x, y, tickLength, tickWidth, horiz, renderer) => {
       const path = renderer.path(['M', x, y, 'L', x, y - 5]).d;
       return path;
     });
    this.init();
  }

  onDestroy() {
    this.$scope.$on('$destroy', () => {
      Highcharts.Tick.prototype.getMarkPath = this.orginGetMarkPath;
    });
  }

  init() {
    this.cids = this.$stateParams.cids.split(',');
    this.count = this.cids.length;
    this.setData();
  }
  changeSave(saveKey) {
    this.setActiveSave(saveKey);
  }
  setActiveSave(saveKey) {
    this.activeSaveHg = this[saveKey];
    this.activeSave = saveKey;
  }
  setData() {
    service.getCompareData({
      cids: this.$stateParams.cids,
    }).then(data => {
      this.projects = data.projects;
      this.dataLoaded = true;
      Object.keys(FID_KEY).forEach(key => {
        const hichartsOptions = {
          options: getHichartsOptions(key),
        };
        hichartsOptions.options.xAxis.categories = data.x;
        hichartsOptions.series = data.seriesData[key];
        this[`${key}Hg`] = hichartsOptions;
      });
      this.setActiveSave('saveHg');
    });
  }

}
