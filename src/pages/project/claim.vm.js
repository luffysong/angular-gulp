export default class ClaimVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
  init() {
    let claimDialog;
    function claimController() {
      this.claimform = {
        realname: '',
        position: '',
        phone: '',
        email: '',
        weixin: '',
        card: '',
      };
      this.claimCancle = function () {
        claimDialog.close();
      };
      this.save = function () {
        console.log(this.claimform);
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
