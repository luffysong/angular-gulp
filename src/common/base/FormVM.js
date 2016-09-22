import { getService } from './utls';
export default class FormVM {
  $validation = getService('$validation');

  constructor(data) {
    this.setData(data);
  }

  setData(data) {
    this.propNames = Object.keys(data);
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  getCopy(arr) {
    const copy = {};
    arr.forEach(key => {
      copy[key] = this[key];
    });
  }

  recovery() {
    this.propNames.forEach(key => {
      this[key] = this.originalData[key];
    });
  }

  preventDefault($e) {
    if ($e) {
      $e.preventDefault();
    }
  }
  validate(form) {
    if (!this.$validation.checkValid(form)) {
      this.$validation.validate(form);
      return false;
    }
    return true;
  }

  reset(form) {
    this.$validation.reset(form);
  }

  enterEditMode() {
    this.isEdit = true;
  }

  exitEditMode(projectInfo) {
    this.isEdit = false;
    this.reset(projectInfo);
    this.recovery();
  }
}
