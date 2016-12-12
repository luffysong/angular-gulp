export default class ProductUserPortraits {
  constructor(userPortraitsData) {
    this.originData = angular.copy(userPortraitsData);
    this.userPortraitsData = userPortraitsData;
    this.processData();
  }

  getData() {
    return this.userPortraitsData.chart;
  }

  processData() {
    const chart = this.userPortraitsData.chart;

    chart.age.y = chart.age.y.map((y) => parseFloat(y));
    chart.age.max = Math.max(...chart.age.y);

    chart.area = chart.area.map((tuple) => ([tuple[0], parseFloat(tuple[1]) * 100]));

    chart.sex.female = parseFloat(chart.sex.female);
    chart.sex.male = parseFloat(chart.sex.male);
    chart.sex.max = Math.max(chart.sex.female, chart.sex.male);
  }
}
