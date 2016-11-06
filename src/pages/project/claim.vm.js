import krData from 'krData';

const getService = krData.utls.getService;
export default class ClaimVM {
  $validation = getService('$validation');

  constructor(fn, id, usr) {
    this.ngDialog = fn;
    this.Cid = id;
    this.user = usr;
    this.projectService = krData.utls.getService('projectService');
    this.getUser();
    this.getManager(this.Cid);
    this.getClaimPending();
  }
  claimForm() {
    let claimDialog;
    const vm = this;
    class claimController {
      manager = vm.manager;
      background = '/images/cardBackground.png';
      constructor() {
        if (vm.user === 'commen') {
          this.position = true;
        } else {
          this.position = false;
        }
      }
      claimform = {
        userName: vm.userInfo.name || '',
        userPosition: '',
        userPhone: vm.userInfo.phone || '',
        userEmail: vm.userInfo.email || '',
        userWeiXin: '',
        userBusinessCard: '',
        privilegeEnum: '',
        id: vm.Cid,
      };
      claimCancle() {
        claimDialog.close();
      }
      changePic() {
        this.claimform.userBusinessCard = '';
        this.suc = false;
      }

      save(form) {
        vm.$validation.validate(form)
          .then(() => this.update(this.claimform, vm.Cid));
      }

      uploadImage($files) {
        if ($files.length) {
          krData.utls.uploadImage($files[0])
            .then(data => {
              this.claimform.userBusinessCard = data.src;
              this.background = data.src;
              this.suc = true;
            }).catch(err => krData.Alert.alert(err.msg));
        }
      }
      update(form, id) {
        vm.projectService.addprivilege({
          id,
        }, form)
          .then(() => {
            claimDialog.close();
            vm.claim = vm.applied;
            krData.Alert.success('数据保存成功');
          }, (data) => {
            krData.Alert.alert(data.msg);
          });
      }
      isFunder() {
        if (this.claimform.privilegeEnum === 'MEMBER') {
          return true;
        }
        return false;
      }
    }
    claimDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/claim.html\'"center>/div>',
      plain: true,
      appendTo: '#projectDetailWrapper',
      controller: claimController,
      controllerAs: 'vm',
    });
  }
  getClaimPending() {
    // 判断当前用户是否在审核认领
    this.projectService.claimPeding(this.Cid)
    .then(() => {
      this.claim = this.claimForm;
    }, () => {
      this.claim = this.applied;
    });
  }
  applied() {
    krData.Alert.alert('已收到认领申请，正在审核中，请勿重复提交！');
  }
  getUser() {
    this.projectService.getUser()
    .then(data => {
      this.userInfo = data;
    });
  }
  getManager(id) {
    const cid = {
      id,
    };
    this.projectService.getManager(cid).then((data) => {
      this.manager = data;
    });
  }
}
