import { getService } from '../../common/base/utls';
import krData from 'krData';
export default class ClaimVM {
  $validation = getService('$validation');
  constructor(fn, id, usr) {
    this.ngDialog = fn;
    this.Cid = id;
    this.user = usr;
    this.projectService = krData.utls.getService('projectService');
  }
  claim() {
    let claimDialog;
    const vm = this;
    function claimController() {
      vm.getManager(vm.Cid);
      this.background = '/images/cardBackground.png';
      if (vm.user === 'commen') {
        this.position = true;
      } else {
        this.position = false;
      }
      this.claimform = {
        userName: '',
        userPosition: '',
        userPhone: '',
        userEmail: '',
        userWeiXin: '',
        userBusinessCard: '',
        privilegeEnum: '',
        id: vm.Cid,
      };
      this.claimCancle = function () {
        claimDialog.close();
      };
      this.changePic = function () {
        this.claimform.userBusinessCard = '';
        this.suc = false;
      };
      this.save = function () {
        if (!vm.$validation.checkValid(this.claim.form)) {
          vm.$validation.validate(this.claim.form);
          return false;
        }
        this.update(this.claimform, vm.Cid);
      };
      this.uploadImage = function ($files) {
        if ($files.length) {
          krData.utls.uploadImage($files[0])
            .then(data => {
              this.claimform.userBusinessCard = data.src;
              this.background = data.src;
              this.suc = true;
            });
        }
      };
      this.update = function (form, id) {
        vm.projectService.addprivilege({
          id,
        }, form)
          .then(() => {
            claimDialog.close();
            krData.Alert.success('数据保存成功');
          }, (data) => {
            krData.Alert.alert(data.msg);
          });
      };
      this.isFunder = function () {
        if (this.claimform.privilegeEnum === 'MEMBER') {
          return true;
        }
        return false;
      };
    }
    claimDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/claim.html\'"center>/div>',
      plain: true,
      appendTo: '.project-wrapper',
      controller: claimController,
      controllerAs: 'vm',
    });
  }
  getManager(id) {
    this.projectService.getManager({
      id,
    }).then((data) => {
      this.manager = data;
    });
  }
}
