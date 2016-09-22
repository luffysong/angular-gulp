export default class ClaimVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
  init() {
    let claimDialog;
    function claimController() {
      this.claimCancle = function () {
        claimDialog.close();
      };
    }
    const str = '<div ng-include="' +
    "'" + '/pages/project/templates/claim.html' + "'" +
    '">/div>';
    function claim() {
      claimDialog = this.ngDialog.open({
        template: str,
        plain: true,
        appendTo: '.project-wrapper',
        controller: claimController,
        controllerAs: 'vm',
      });
    }

    this.claim = claim;
  }
}
