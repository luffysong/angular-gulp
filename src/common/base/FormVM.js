import { getService, mapProps } from './utls';
import Alert from './Alert';
export default class FormVM {
  $validation = getService('$validation');
  $q = getService('$q');


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
    console.log('deprecated , use validate2');
    if (!this.$validation.checkValid(this.form)) {
      this.$validation.validate(this.form);
      /* Alert.alert('表单不合法，请更正红色表示部分'); */
      return false;
    }
    return true;
  }

  validate2() {
    return this.$validation.validate(this.form)
      .catch(() => {
        /* Alert.alert('表单不合法，请更正红色表示部分'); */
        return this.$q.reject();
      });
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
