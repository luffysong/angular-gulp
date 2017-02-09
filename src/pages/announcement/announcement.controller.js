@Inject('indexService', '$timeout', '$window')
export default class announcementController {

  constructor() {
    this.init();
  }
  init() {

  }

  announcementInfo() {
    const vm = this;
    function infoController() {
      this.infoCancle = function() {
        vm.infoDialog.close();
      };
    }

    vm.infoDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/announcement/templates/index.html\'" center>/div>',
      plain: true,
      appendTo: '.announcement',
      controller: infoController,
      controllerAs: 'vm',
    });
  }

}

