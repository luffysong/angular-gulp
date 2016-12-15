import krData from 'krData';
export default class IntroductionVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  isEmpty = false;
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
  }

  props = ['id', 'intro', 'fullName', 'scale',
    'operationStatus', 'address1', 'address2',
    'startDate','productService', 'userMarket', 'businessMode', 'coreSource', 'operationData'];

  initData(data) {
    this.mapProps(this.props, data, this);
    this.isEmpty = krData.utls.isEmpty(data);
    this.startDate = parseInt(data.startDateDesc, 10);
    this.operationStatus = data.operationStatusEnum || krData.META.OPERATION_STATUS.OPEN;
    this.scale = data.scale;
    this.loadArea0();
    this.watch();

    this.origCompanyData = {};
    this.companyIntroduce = {};
    angular.copy(data, this.origCompanyData);
    this.data = data;
    this.companyIntroduce.id = data.id;
    if (data.companyIntroduce) {
      this.productService = data.companyIntroduce.productService;
      this.userMarket = data.companyIntroduce.userMarket;
      this.businessMode = data.companyIntroduce.businessMode;
      this.coreSource = data.companyIntroduce.coreSource;
      this.operationData = data.companyIntroduce.operationData;
    }
    this.setIntroduce();
  }

  setIntroduce() {
    this.hasIntroduce = krData.utls.one(this.data.companyIntroduce, this.props.slice(1));
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    this.originalData.startDate = parseInt(this.originalData.startDateDesc, 10);
    angular.extend(this, this.originalData);
    const tempData = {};
    angular.copy(this.origCompanyData, tempData);
    angular.extend(this, tempData.companyIntroduce);
    angular.extend(this.data, tempData);
  }

  watch() {
    this.$scope.$watch(() => this.address1, (nv) => {
      if (angular.isDefined(nv)) {
        this.loadArea1(nv);
      }
    });
  }
  loadArea0() {
    this.projectService.getArea(0)
      .then(data => {
        this.cities0 = data;
      });
  }
  loadArea1(id) {
    this.projectService.getArea(id)
      .then(data => {
        this.cities1 = data;
      });
  }

  scaleClick(item) {
    this.scale = item;
    this.scaleHidden = true;
    krData.utls.getService('$timeout')(() => {
      this.scaleHidden = false;
    }, 500);
  }

  save() {
    this.validate2().then(() => {
      this.projectService.editBase({
        id: this.id,
      }, this.mapProps(this.props, this))
      .then(() => {
        this.recovery();
        krData.Alert.success('数据保存成功');
        this.isEdit = !this.isEdit;
        this.projectService.editIntroduce({
          id: this.id,
        }, this.mapProps(this.props, this))
        .then(() => {
        });
      });
    });
  }

  isUndefined(obj) {
    return angular.isUndefined(obj);
  }
}

