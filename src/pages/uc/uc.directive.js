import UcService from './uc.service';
import krData from 'krData';

const ucService = new UcService();

@Inject('$rootScope','$window', '$validation', '$q')
class UcPageController {

  constructor() {
    this.editEmail = false;
    this.user = {};
    this.companies = {};
    this.initData();
  }

  initData() {
    ucService.getUser().then((data) => {
      this.user = data;
    });
    ucService.getCompany().then((data) => {
      this.companies = data;
    });
  }

  getBgImage(img) {
    return `url('${img}')`;
  }

  setContact(type) {
    const { autoReplyByWeiXin, autoReplyByPhone } = this.user;
    if (type === 'weixin') {
      ucService.setAutoreply(type, autoReplyByWeiXin);
    }
    if (type === 'phone') {
      ucService.setAutoreply(type, autoReplyByPhone);
    }
  }

  setBpEmail() {
    if (!this.user.commonEmail) {
      return;
    }

    this.$validation.validate(this.emailForm).catch(() => {
      return this.$q.reject();
    }).then(() => {
      ucService.addBPEmail(this.user.commonEmail);
      this.editEmail = false;
    });
  }

  editBpEmail() {
    this.editEmail = true;
  }

  loginOut(){
    krData.utls.logout();
    const vm = this;
    setTimeout(function(){
      vm.$window.location.reload();
    },500);
  }

}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/index.html',
  controller: UcPageController,
};
