import krData, { utls } from 'krData';
@Inject('$timeout', '$state')
export default class CreateProjectVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
thirdparty;
  init(){
      this.thirdparty = this.openSubProject;
  }

  openSubProject() {
    const vm = this;
    function saveController() {
      this.updateCancle = function () {
        vm.thirdpartyDialog.close();
      };
    }
    vm.thirdpartyDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/thirdparty/template/updateproject.html\'" center></div>',
      plain: true,
      appendTo: '#thirdpartyWrapper',
      controller: saveController,
      controllerAs: 'vm',
    });
  }
}
