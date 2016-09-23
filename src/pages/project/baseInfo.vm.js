import krData from 'krData';
export default class BaseInfoVM extends krData.FormVM {
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
    this.projectService = krData.utls.getService('projectService');
  }

  initData(data) {
    angular.extend(this, data);
    this.watch();
  }

  setData(data) {
    this.propNames = Object.keys(data);
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    this.propNames.forEach(key => {
      this[key] = this.originalData[key];
    });
  }

  uploadBp($files) {
    krData.utls.uploadBp('我随便起的名字', $files[0])
      .then(function uploadSuccess(data) {
        console.log(data);
      });
  }

  watchName() {
    const that = this;
    this.$scope.$watch('vm.baseInfoVM.name', function watchName(nv, ov) {
      if (nv !== ov) {
        that.$validation.validate(that.projectInfo.fullName);
      }
    });
  }

  watch() {
    this.watchName();
  }


  refresh(data) {
    angular.extend(this, data);
    this.setData(data);
  }

  update($event) {
    if (!this.validate($event)) return;
    angular.extend(this.originalData, this);
    this.projectService.update({
      id: this.id,
    }, this.getCopy(['name', 'fullName']))
      .then((data) => {
        this.refresh(data);
        this.ok();
      });
  }
}
