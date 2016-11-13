@Inject('$scope', '$stateParams', '$state', 'user')
export default class EditInvestorController {
  constructor() {
    this.$scope.investorInfoVm.isEditMode = true;
    this.onDestroy();
    this.ensureAllowEdit();
  }
  onDestroy() {
    this.$scope.$on('$destroy', () => {
      this.$scope.investorInfoVm.isEditMode = false;
    });
  }

  // 判断当前用户是否可编辑
  ensureAllowEdit() {
    if (!this.$scope.investorInfoVm.editable) {
      this.$state.go('investorInfo', {
        id: this.$stateParams.id,
      });
    }
  }
}
