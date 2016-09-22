import krData from 'krData';
export default class BaseInfoVM extends krData.FormVM {
  constructor(data) {
    super(data);
    angular.extend(this, data);
    this.init();
  }
  init() {
    this.projectService = krData.utls.getService('projectService');
  }

  update(form, $event) {
    if (!this.validate(form, $event)) return;
    angular.extend(this.originalData, this);
    this.projectService.update({
      id: this.id,
    }, this.getCopy(['name', 'fullName']))
      .then(() => {
        this.ok();
      });
  }
}
