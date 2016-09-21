import krData from 'krData';
export default class BaseInfoVM extends krData.FormVM {
  constructor(data) {
    super();
    angular.extend(this, data);
    this.init();
  }
  init() {
    this.projectService = krData.utls.getService('projectService');
  }

  getCopy(arr) {
    const copy = {};
    arr.forEach(key => {
      copy[key] = this[key];
    });
  }

  update(form, $event) {
    if (!this.validate(form, $event)) return;
    this.projectService.put({
      id: this.id,
    }, this.getCopy(['name', 'fullName']));
  }
}
