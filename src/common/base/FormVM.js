import { getService } from './utls';
export default class FormVM {
  $validation = getService('$validation');

  constructor(data) {
    this.setData(data);
  }

  setData() {
  }

  getCopy(arr) {
    const copy = {};
    arr.forEach(key => {
      copy[key] = this[key];
    });
  }

  recovery() {
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

  ok() {
    this.isEdit = false;
  }

  enterEditMode() {
    this.isEdit = true;
  }

  cancel(projectInfo) {
    this.isEdit = false;
    this.reset(projectInfo);
    this.recovery();
  }
}
