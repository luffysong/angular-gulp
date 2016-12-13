export const FID_KEY = {
  dau: 'md_0006',
  download: 'md_0001',
  uninstall: 'md_0009',
  save: 'md_0022',
  save3: 'md_0024',
  save7: 'md_0025',
  save30: 'md_0027',
};
export default class ProductDataService {


  FID_KEY = FID_KEY;


  constructor(companyData) {
    this.companyData = companyData;
  }

  getProduct() {
    const companyData = this.companyData;
    return {
      seriesData: this._convertDiagram(companyData.user_stat.y_list),
      x: companyData.user_stat.x,
      exposure: this._convertObj(companyData.exposure_stat),
      appRank: this._convertObj(companyData.ios_rank),
      download: this._convertObj(companyData.android_download),
      websiteRank: this._convertObj(companyData.website_rank),
    };
  }

  _convertObj(obj) {
    return {
      x: obj.x,
      data: obj.y_list[0] && obj.y_list[0].y ? obj.y_list[0].y : [],
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
