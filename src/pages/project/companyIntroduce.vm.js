import krData from 'krData';
export default class CompanyIntroduceVM extends krData.FormVM{
  projectService = krData.utls.getService('projectService');
  constructor(data,id) {
    super(data);
    this.initData(data,id);
  }

  props = ['id', 'productService', 'userMarket', 'businessMode', 'coreSource', 'operationData'];

  initData (data,id) {
    // this.companyIntroduce = data.companyIntroduce;
    // this.origCompanyData = data.companyIntroduce;
    // this.id = id;
    // this.companyIntroduce.id = id;
    this.origCompanyData = {};
    this.companyIntroduce = {};
    angular.copy(data,this.origCompanyData);
    this.data = data;
    this.id = id;
    this.companyIntroduce.id = id;
    this.companyIntroduce.productService = data.companyIntroduce.productService;
    this.companyIntroduce.userMarket = data.companyIntroduce.userMarket;
    this.companyIntroduce.businessMode = data.companyIntroduce.businessMode;
    this.companyIntroduce.coreSource = data.companyIntroduce.coreSource;
    this.companyIntroduce.operationData = data.companyIntroduce.operationData;
  }

  recovery() {
    const tempData = {};
    angular.copy(this.origCompanyData,tempData);
    angular.extend(this,tempData);
    angular.extend(this.data,tempData);
    // angular.extends(this.data.companyIntroduce,tempData);
  }

  save() {
    this.projectService.editIntroduce({
      id: this.id,
    }, this.mapProps(this.props, this.companyIntroduce))
    .then(() => {
      this.recovery();
      krData.Alert.success('数据保存成功');
      this.isEdit = !this.isEdit;
    });
  }
}
