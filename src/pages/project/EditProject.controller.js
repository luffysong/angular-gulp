@Inject('$scope', 'projectService', '$stateParams')
export default class EditProjectController {
  constructor() {
    this.$scope.vm.isEditMode = true;
    this.onDestroy();
    this.getUser();
  }
  onDestroy() {
    this.$scope.$on('$destroy', () => {
      this.$scope.vm.isEditMode = false;
    });
  }

  // 判断当前用户是否可编辑
  getUser() {
    this.id = this.$stateParams.id;
    this.projectService.get({ id: this.id })
    .then((data) => {
      if (!data.member) {
        window.location.href = '/project/' + this.id;
      }
      return;
    });
  }
}
