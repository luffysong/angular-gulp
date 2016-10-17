import krData from 'krData';
const $validation = krData.utls.getService('$validation');
export default class financeVM {
  constructor(scope) {
    this.$scope = scope;
    this.setBiggerValidator();
    this.watchInvestAmountMin();
  }

  finance = {
    privilege: 'INVESTOR',
    financeAmountUnit: 'CNY',
  };

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

  setValid(name) {
    this.form[name].$setValidity(name, true);
  }

  watchInvestAmountMin() {
    this.$scope.$watch(() => this.finance.investAmountMin, nv => {
      $validation.validate(this.form.investAmountMax);
    });
  }
  isActive() {
    if ($validation.checkValid(this.form) && this.readed) {
      return true;
    }
    return false;
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
