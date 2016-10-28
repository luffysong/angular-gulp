import krData from 'krData';
export default class IntroductionVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
  }

  props = ['id', 'intro', 'fullName', 'scale',
    'operationStatus', 'address1', 'address2',
    'startDate']
  initData(data) {
    this.mapProps(this.props, data, this);
    this.startDate = parseInt(data.startDateDesc, 10);
    this.operationStatus = data.operationStatusEnum || krData.META.OPERATION_STATUS.OPEN;
    this.scale = data.scale;
    this.loadArea0();
    this.watch();
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    angular.extend(this, this.originalData);
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
      });
    });
  }

}
