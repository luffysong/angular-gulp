import { getService } from './utls';
export default class FormVM {
  $validation = getService('$validation');

  validate(form, $event) {
    if ($event) {
      $event.preventDefault();
    }
    if (!this.$validation.checkValid(form)) {
      this.$validation.validate(form);
      return false;
    }
    return true;
  }
}
