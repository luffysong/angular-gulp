/* @ngInject */
function announcementDirective(ngDialog) {
  return {
    restrict: 'AE',
    link($scope, element, attr) {
      element.click(() => {
        const vm = this;
        function infoController() {
          this.infoCancle = function() {
            vm.infoDialog.close();
          };
        }
        vm.infoDialog = ngDialog.open({
          template: '<div ng-include="\'/pages/announcement/templates/index.html\'" center>/div>',
          plain: true,
          appendTo: '.announcement',
          controller: infoController,
          controllerAs: 'vm',
        });
      });
    }
  };
}
export default announcementDirective;
