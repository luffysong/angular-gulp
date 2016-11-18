import { API } from 'krData';
const compareCompanyApi = new API('/user/follow/company/data_compare');
export const FID_KEY = {
  dau: 'md_0006',
  download: 'md_0001',
  uninstall: 'md_0009',
  save: 'md_0022',
  save3: 'md_0024',
  save7: 'md_0025',
  save30: 'md_0027',
};
function getY(map, name) {
  const y = (map[FID_KEY[name]] || {}).y || [];
  if (name.indexOf('save') > -1) {
    return y.map(value => value * 100);
  }
  return y;
}
export default class WorkstationCompareService {

  api = compareCompanyApi;

  FID_KEY = FID_KEY;

  getCompareData(params) {
    return compareCompanyApi.get(params)
        .then((data) => ({
          seriesData: this._convertDiagram(data.diagram),
          x: data.diagram[0].chartData.x,
          projects: data.table,
        }));
  }

  _convertDiagram(diagram) {
    const seriesData = {};
    Object.keys(FID_KEY).forEach(key => (seriesData[key] = []));
    diagram.forEach(companyData => {
      Object.keys(FID_KEY).forEach((key) => {
        this._pushSerie(seriesData, companyData, key);
      });
    });
    return seriesData;
  }

  _pushSerie(seriesData, compnayData, key) {
    seriesData[key].push({
      name: compnayData.companyName,
      data: getY(compnayData.chartData.y_map, key),
    });
  }

}
