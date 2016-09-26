import { getService } from './utls';
import Alert from './Alert';
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
      const keys = key.split(':');
      copy[keys[1] || keys[0]] = this[keys[0]];
    });
    return copy;
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
      Alert.alert('表单不合法，请更正红色表示部分');
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
