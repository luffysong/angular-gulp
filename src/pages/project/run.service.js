import noDataFactory from '../../bower/highcharts/modules/no-data-to-display.src.js';
export default class ProjectRun {
  run() {
    this._configHighchart();
  }
  _configHighchart() {
    noDataFactory(Highcharts);
    Highcharts.setOptions({
      lang: {
        noData: '暂无数据',
      },
    });
    Highcharts.wrap(Highcharts.Tick.prototype, 'getMarkPath',
     (prev, x, y, tickLength, tickWidth, horiz, renderer) => {
       const path = renderer.path(['M', x, y, 'L', x, y - 5]).d;
       return path;
     });
  }
}
