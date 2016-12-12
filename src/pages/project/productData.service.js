import { API } from 'krData';

export const FID_KEY = {
  dau: 'md_0006',
  download: 'md_0001',
  uninstall: 'md_0009',
  save: 'md_0022',
  save3: 'md_0024',
  save7: 'md_0025',
  save30: 'md_0027',
};
@Inject('projectService')
export default class ProductDataService {


  FID_KEY = FID_KEY;


  constructor() {
    this.init();
  }

  init() {

  }

  getProduct(params) {
    return this.projectService.allData({
      id: params.id,
    }).then((data) => {
      return {
        seriesData: this._convertDiagram(data.product.companyData.user_stat.y_list),
        x: data.product.companyData.user_stat.x,
        exposure: this._convertObj(data.product.companyData.exposure_stat),
        appRank: this._convertObj(data.product.companyData.ios_rank),
        download: this._convertObj(data.product.companyData.android_download),
        websiteRank: this._convertObj(data.product.companyData.website_rank),
      };
    });
  }

  _convertObj(obj) {
    return {
      x: obj.x,
      data: obj.y_list[0].y,
    };
  }

  _convertDiagram(diagram) {
    const seriesData = {};
    Object.keys(FID_KEY).forEach(key => (seriesData[key] = []));
    diagram.forEach(companyData => {
      Object.keys(FID_KEY).forEach((key) => {
        if (FID_KEY[key] === companyData.fid) {
          seriesData[key] = companyData.y;
        }
        /*this._pushSerie(seriesData, companyData, key);*/
      });
    });
    return seriesData;
  }

  _pushSerie(seriesData, compnayData, key) {
    seriesData[key].push({
      name: compnayData.y,
    });
  }

}
