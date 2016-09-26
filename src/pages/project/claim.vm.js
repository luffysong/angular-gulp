export default class ClaimVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
  init() {
    let claimDialog;

    function claimController() {
      let vm = this;
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
        console.log(vm.validate());
      };
    }
    const str = '<div ng-include="' +
    "'" + '/pages/project/templates/claim.html' + "'" +
    '" center>/div>';
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
