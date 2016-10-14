import krData from 'krData';
const $validation = krData.utls.getService('$validation');
export default class financeVM {
  constructor(scope) {
    this.$scope = scope;
    this.setBiggerValidator();
  }

  finance = {
    privilege: 'INVESTOR',
    financeAmountUnit: 'CNY',
  };
  disable = true;

  uploadBp($files) {
    const name = this.$scope.vm.baseInfo.name || 'test';
    let validObj = null;
    if ($files.length) {
      validObj = krData.utls.validateBP($files[0]);
      if (!validObj.valid) {
        krData.Alert.alert(validObj.msg);
        return;
      }
      krData.utls.uploadBp(name, $files[0])
        .then(data => {
          this.finance.bp = data.src;
          this.bpName = `[${name}]商业计划书.pdf`;
        }, err => {
          krData.Alert.alert(`上传BP失败:${err.msg}`);
        });
    }
  }

  show(form) {
    if ($validation.checkValid(form) && this.readed) {
      return false;
    }
    return true;
  }

  setBiggerValidator() {
    $validation.setExpression({
      bigger: (number) => {
        if (angular.isUndefined(number) || number === '') {
          return true;
        }
        number = parseFloat(number);
        if (number >= parseFloat(this.finance.investAmountMin)) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      bigger: {},
    });
  }
  deletebp() {
    this.finance.bp = '';
    this.bpName = '';
    krData.utls.getService('$timeout')(() => {
      $validation.validate(this.form.bp);
    });
  }
  privilege() {
    if (this.privileges) {
      this.finance.privilege = 'MUST_APPLY';
    } else {
      this.finance.privilege = 'INVESTOR';
    }
  }
}
