import { utls } from 'krData';
import { FID_KEY } from './WorkstationCompare.service';
const getService = utls.getService;
let service = null;

function getHichartsOptions() {
  return {
    colors: ['#88C4FF', '#B3DD6A', '#CAD1FF', '#FFD46B', '#9DE3D9'],
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    chart: {
      width: 940,
      height: 340,
    },
    title: {
      text: null,
      float: true,
    },
    legend: {
      float: true,
      align: 'right',
      verticalAlign: 'top',
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
      tickWidth: 1,
      lineWidth: 1,
      tickPosition: 'inside',
      lineColor: '#E7E7E7',
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
      tickPixelInterval: 51,
      title: {
        enabled: false,
      },
    }],
  };
}
export default class WorkstationCompareController {

  constructor() {
    service = getService('workstationCompareService');
    this.init();
  }

  init() {
    this.setData();
  }

  setData() {
    service.getCompareData({
      cids: '1112,20633,25396',
    }).then(data => {
      this.projects = data.projects;
      Object.keys(FID_KEY).forEach(key => {
        const hichartsOptions = {
          options: getHichartsOptions(),
        };
        hichartsOptions.options.xAxis.categories = data.x;
        hichartsOptions.series = data.seriesData[key];
        this[`${key}Hg`] = hichartsOptions;
      });
    });
  }

}
