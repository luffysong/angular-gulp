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
  validate() {
    if (!this.$validation.checkValid(this.form)) {
      this.$validation.validate(this.form);
      return false;
    }
    return true;
  }

  reset() {
    this.$validation.reset(this.form);
  }

  ok() {
    this.isEdit = false;
  }

  enterEditMode() {
    this.isEdit = true;
  }

  cancel() {
    this.isEdit = false;
    this.reset();
    this.recovery();
  }
}
