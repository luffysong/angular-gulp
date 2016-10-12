@Inject('$scope')
export default class EditProjectController {
  constructor() {
    this.$scope.vm.isEditMode = true;
    this.onDestroy();
  }
  onDestroy() {
    this.$scope.$on('$destroy', () => {
      this.$scope.vm.isEditMode = false;
    });
  }
}
