import krData from 'krData';
const $validation = krData.utls.getService('$validation');
export default class financeVM {
  constructor(scope, name) {
    this.$scope = scope;
    this.name = name;
    this.setBiggerValidator();
    this.watchInvestAmountMin();
  }

  finance = {
    privilege: 'INVESTOR',
    financeAmountUnit: 'CNY',
  };

  uploadBp($files) {
    const name = this.$scope.vm.baseInfo.name || this.name;
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
          this.bpUploading = false;
          krData.Alert.alert(`上传BP失败:${err.msg}`);
        }).then(null, null, (progress) => {
          if (progress.type === 'load') {
            this.bpProgress = '100%';
            this.bpUploading = false;
          } else if (progress.type === 'progress') {
            this.bpProgress = `${(progress.loaded * 100) / progress.total}%`;
            this.bpUploading = true;
          }
        });
    }
  }

  setValid(name) {
    this.form[name].$setValidity(name, true);
  }

  watchInvestAmountMin() {
    this.$scope.$watch(() => this.finance.investAmountMin, () => {
      if (this.form) {
        $validation.validate(this.form.investAmountMax);
      }
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
    console.log(this.privileges);
    if (this.privileges) {
      this.finance.privilege = 'MUST_APPLY';
    } else {
      this.finance.privilege = 'INVESTOR';
    }
  }
}
