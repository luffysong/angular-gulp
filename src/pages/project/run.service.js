import noDataFactory from '../../bower/highcharts/modules/no-data-to-display.src.js';
export default class ProjectRun {
  run() {
    this._configHighchart();
  }
  _configHighchart() {
    noDataFactory(Highcharts);
    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
        noData: '暂无数据',
      },
    });
  }
}
