import krData from 'krData';
export default class EditFinanceVM extends krData.FormVM {
  constructor(data, $scope, id) {
    super(data);
    console.log('cancel', this.cancel());
    this.id = id;
    this.$scope = $scope;
    this.projectService = krData.utls.getService('projectService');
    this.init(data);
  }

  props = ['financeAmount', 'financeAmountUnit', 'financeDate', 'investorList',
           'newsUrl', 'phase'];

  init(data) {
    angular.extend(this, data);
  }

  update() {
    if (this.validate()) {
      this.financeDate = `${this.financeDateYear}-${this.financeDateMonth}-01`;
      this.investorList = {
        entityName: this.entityName,
      };

      this.projectService.addfinance({
        id: this.id,
      }, this.mapProps(this.props, this))
      .then(() => {
        krData.Alert.success('数据保存成功');
      });
    }
  }
}
