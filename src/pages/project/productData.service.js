export const FID_KEY = {
  dau: 'md_0006',
  dayDownload: 'md_0001',
  uninstall: 'md_0009',
  save: 'md_0022',
  save3: 'md_0024',
  save7: 'md_0025',
  save30: 'md_0027',
  report: 'em_0001',
  search: 'em_0002',
  weibo: 'em_0003',
};
export default class ProductDataService {


  FID_KEY = FID_KEY;


  constructor(companyData) {
    this.companyData = companyData;
  }

  getProduct() {
    const companyData = this.companyData;
    const obj = {
      appRank: this._convertObj(companyData.ios_rank),
      download: this._convertObj(companyData.android_download),
      websiteRank: this._convertObj(companyData.website_rank),
    };
    const arr = companyData.user_stat.y_list || [];
    this._convertDiagram(arr, obj);
    const exposureArr = companyData.exposure_stat.y_list || [];
    this._convertDiagram(exposureArr, obj);
    return obj;
  }

  _convertObj(obj) {
    return {
      x: obj.x ? obj.x : [],
      data: obj.y_list && obj.y_list[0] && obj.y_list[0].y ? obj.y_list[0].y : [],
    };
  }

  _convertDiagram(diagram, target) {
    Object.keys(FID_KEY).forEach((key) => {
      /*target[key] = {
        data: [],
        x: [],
      };*/
      diagram.forEach(companyData => {
        if (FID_KEY[key] === companyData.fid) {
          target[key] = {
            data: companyData.y,
            x: this.companyData.user_stat.x || [],
          };
        }
      });

    });
  }

}
