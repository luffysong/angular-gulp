import { getService, mapProps } from './utls';
import Alert from './Alert';
export default class FormVM {
  $validation = getService('$validation');

  constructor(data) {
    this.setData(data);
  }

  setData() {
  }

  mapProps(arr, from, to, isReverse) {
    return mapProps(arr, from, to, isReverse);
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
