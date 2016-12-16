export default class ProductUserPortraits {
  constructor(userPortraitsData) {
    this.userPortraitsData = angular.copy(userPortraitsData);
    this.processData();
  }

  getData() {
    return this.userPortraitsData.chart;
  }

  processData() {
    const chart = this.userPortraitsData.chart;

    if (chart.age) {
      chart.age.y = chart.age.y.map((y) => parseFloat(y));
      chart.age.max = Math.max(...chart.age.y);
    }

    if (chart.area) {
      chart.area = chart.area.map((tuple) => ([tuple[0], parseFloat(tuple[1]) * 100]));
    }

    if (chart.sex) {
      chart.sex.female = parseFloat(chart.sex.female);
      chart.sex.male = parseFloat(chart.sex.male);
      chart.sex.max = Math.max(chart.sex.female, chart.sex.male);
    }
  }
}
