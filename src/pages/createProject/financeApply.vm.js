import krData from 'krData';
const $validation = krData.utls.getService('$validation');
// @Inject('$sce', '$scope')
export default class financeVM {
  constructor(scope) {
    this.$scope = scope;
    this.show();
  }

  finance = {
    privilege: 'INVESTOR',
    financeAmountUnit: 'CNY',
  };
  disable = true;

  uploadImage($files) {
    if ($files.length) {
      krData.utls.uploadBp($files[0].name, $files[0])
        .then(data => {
          this.finance.bp = data.src;
          this.bpName = $files[0].name + '_20161010.pdf';
        }, data => {
          console.log(data, $files[0].name);
        });
    }
  }
  validate(form) {
    if (!$validation.checkValid(form)) {
      $validation.validate(form);
      krData.Alert.alert('表单不合法，请更正红色表示部分');
      return false;
    }
    return true;
  }
  show() {
    this.$scope.$watch('vm.financeVM.readed', () => {
      console.log('dasd');

      if ($validation.checkValid('vm.finance.form') && this.readed) {
        this.disable = false;
        console.log('dasd');
      }
    });
  }


  save(form) {
    console.log(this.finance);
    if (!$validation.checkValid(form) && this.readed) {
      return false;
    }
    return true;
  }
  deletebp() {
    this.finance.bp = '';
    this.bpName = '';
  }
  privilege() {
    if (this.privileges) {
      this.finance.privilege = 'MUST_APPLY';
    } else {
      this.finance.privilege = 'INVESTOR';
    }
  }
}
