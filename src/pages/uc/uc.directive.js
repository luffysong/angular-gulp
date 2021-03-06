import krData from 'krData';
import UcService from './uc.service';

const ucService = new UcService();

@Inject('$rootScope', '$window', '$validation', '$q')
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
      this.queryInsititute();

    });
    ucService.getCompany().then((data) => {
      this.companies = data;
    });
  }


  getBgImage(img) {
    return `url('${img || krData.utls.EMPTY_IMAGE}')`;
  }

  setContact() {
    const autoReply = this.user.autoReply;
    ucService.setAutoreply(autoReply);
  }

  setBpEmail() {
    if (!this.user.commonEmail) {
      return;
    }

    this.$validation.validate(this.emailForm).catch(() => this.$q.reject()
    ).then(() => {
      ucService.addBPEmail(this.user.commonEmail);
      this.editEmail = false;
    });
  }

  editBpEmail() {
    this.editEmail = true;
  }

  loginOut() {
    krData.utls.logout();
  }

  queryInsititute(){
    ucService.getInstitute().then((data) => {
      if (data.length) {
          this.institute = data;
      }
    });
  }

}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/index.html',
  controller: UcPageController,
};
