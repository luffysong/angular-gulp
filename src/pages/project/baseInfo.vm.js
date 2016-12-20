import krData from 'krData';
export default class BaseInfoVM extends krData.FormVM {
  constructor(data, $scope) {
    super(data);
    this.$scope = $scope;
    this.initData(data);
    this.projectService = krData.utls.getService('projectService');
  }

  props = ['name',
      'remarkName',
      'website',
      'weibo',
      'weixin',
      'logo',
      'brief',
    ];

  initData(data) {
    angular.extend(this, data);
    this.mapProps(this.props, data, this);
    this.watch();
    this.showTop = !krData.utls.isEmpty(data.projectStatHeader.tag1);
    this.showTop2 = !krData.utls.isEmpty(data.projectStatHeader.tag2);
    if(!krData.utls.isEmpty(data.projectStatHeader.finance_amount)){
      this.showFinanceAmount = true;
      const num = parseInt(data.projectStatHeader.finance_amount.val);
      this.amountIsNumber = !angular.equals(NaN,num);
    }else{
      this.showFinanceAmount = false;
    }
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    angular.extend(this, this.originalData);
  }

  uploadImage($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then(data => {
          this.logo = data.src;
        });
    }
  }

  watchName() {
    const that = this;
    this.$scope.$watch('vm.baseInfoVM.name', function watchName(nv, ov) {
      if (nv !== ov) {
        that.$validation.validate(that.form.remarkName);
      }
    });
  }

  watch() {
    this.watchName();
  }

  update() {
    this.validate2().then(() => {
      this.projectService.editHeader({
        id: this.id,
      }, this.mapProps(this.props, this))
        .then(() => {
          this.recovery();
          krData.Alert.success('数据保存成功');
          this.ok();
        }, (data) => {
          krData.Alert.alert(data.msg);
        });
    });
  }
}
