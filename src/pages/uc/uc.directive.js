import UcService from './uc.service';

const ucService = new UcService();

@Inject('$rootScope')
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
    ucService.addBPEmail(this.user.commonEmail);
    this.editEmail = false;
  }

  editBpEmail() {
    this.editEmail = true;
  }

}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/index.html',
  link: (scope, ele, attrs) => {
  },
  controller: UcPageController,
};
