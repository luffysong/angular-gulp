import { getService } from '../../common/base/utls';
import krData from 'krData';
export default class ClaimVM {
  $validation = getService('$validation');
  constructor(fn, id) {
    this.ngDialog = fn;
    this.init();
    this.Cid = id;
    this.projectService = krData.utls.getService('projectService');
  }
  init() {
    let claimDialog;
    const vm = this;
    function claimController() {
      this.claimform = {
        userName: '',
        userPosition: '',
        userPhone: '',
        userEmail: '',
        userWeixin: '',
        userBusinessCard: '',
        privilegeEnum: 'MEMBER',
        id: vm.Cid,
      };
      this.claimCancle = function () {
        claimDialog.close();
      };
      this.save = function () {
        if (!vm.$validation.checkValid(this.claim.form)) {
          vm.$validation.validate(this.claim.form);
          console.log(this.claimform, vm.$validation.checkValid(this.claim.form));
          return false;
        }
        vm.update(this.claimform, vm.Cid);
      };
      this.uploadImage = function ($files) {
        if ($files.length) {
          krData.utls.uploadImage($files[0])
            .then(data => {
              this.claimform.userBusinessCard = data.src;
            });
        }
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
  update(form, id) {
    this.projectService.addprivilege({
      id: id,
    }, form)
      .then(() => {
        console.log('ok');
      });
  }
}
