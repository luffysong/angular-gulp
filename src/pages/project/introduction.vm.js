import krData from 'krData';
export default class IntroductionVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
  }

  props = ['id', 'intro', 'fullName', 'scale',
    'operationStatusEnum', 'address1', 'address2',
    'startDate']
  initData(data) {
    this.mapProps(this.props, data, this);
    this.startDate = 2016;
    this.operationStatusEnum = krData.META.OPERATION_STATUS.OPEN;
    this.scale = '少于50人';
    this.loadArea0();
    this.watch();
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

  save() {
    if (this.validate()) {
      this.projectService.editBase({
        id: this.id,
      }, this.mapProps(this.props, this))
      .then(() => {
        krData.Alert.success('数据保存成功');
      });
    }
  }

}
