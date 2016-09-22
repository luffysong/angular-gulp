import krData from 'krData';
export default class BaseInfoVM extends krData.FormVM {
  constructor(data) {
    super(data);
    this.initData(data);
    this.projectService = krData.utls.getService('projectService');
  }

  initData(data) {
    angular.extend(this, data);
  }

  refresh(data) {
    angular.extend(this, data);
    this.setData(data);
  }

  update(form, $event) {
    if (!this.validate(form, $event)) return;
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
