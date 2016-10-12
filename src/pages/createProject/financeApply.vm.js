import krData from 'krData';
const $validation = krData.utls.getService('$validation');
export default class financeVM {
  constructor(scope) {
    this.$scope = scope;
  }

  finance = {
    privilege: 'INVESTOR',
    financeAmountUnit: 'CNY',
  };
  disable = true;

  uploadBp($files) {
    const name = this.$scope.vm.baseInfo.name || 'test';
    if ($files.length) {
      krData.utls.uploadBp(name, $files[0])
        .then(data => {
          this.finance.bp = data.src;
          this.bpName = `[${name}]商业计划书.pdf`;
        }, err => {
          krData.Alert.alert(`上传BP失败:${err.msg}`);
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
  show(form) {
    if ($validation.checkValid(form) && this.readed) {
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
