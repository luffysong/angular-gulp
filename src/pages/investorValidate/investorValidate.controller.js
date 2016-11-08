import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type', '$window',
  '$scope', '$q', '$filter', '$stateParams', '$state', 'checkForm', '$validation')
export default class investorValidateController {



  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.companyIndustry = this.$scope.root.COMPANY_INDUSTRY_META;

    this.followPhase = this.$scope.root.COMPANY_SEARCH_PHASE_META;

    this.investorRole = this.$scope.root.INVESTOR_ROLE_META;

    this.step = 1;

    this.baseInfo = {};

    this.recommendInvestor = [
      {
        active:false
      },{
        active:false
      },{
        active:false
      },{
        active:false
      }
    ];
    this.auditStatus = 'auditing';

    this.getUser();

    /*this.projectService.submitValidate().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });*/

  }

  prev() {
    this.step = 1;
  }

  selectItem($index) {
    this.recommendInvestor.forEach((item,i) => {
      console.log(i);
      if($index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    })
  }

  getUser() {
    krData.User.getUserInfo().then(data => {
      console.log(data);
      delete data.phone;
      this.userData = data;
    }).catch(err => {
      console.log(err);
      if(err.code === 403) {
        this.$scope.root.user.ensureLogin();
        console.log('未登录');
      }
    });
    /*this.user.then(data => {
      console.log(data);
    });*/
  }

  getCode() {
    // 获取验证码
      this.wait = 2;
      var interval = setInterval(() => {
        this.$scope.$apply(() => {
          this.wait--;
          if (this.wait === 0) {
            clearInterval(interval);
            this.wait = 0;
          }
        });
      }, 1000);
      this.projectService.getMsgCode({
        phone: this.baseInfo.phone
      }).then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      });
  }


  /*验证手机号是否合法*/
  submitInfo() {
    this.$validation.validate(this.baseInfo.form).catch(() => {
      return this.$q.reject();
    }).then(() => {
      console.log(1);
      this.projectService.suggestInvestor({
        name: this.baseInfo.realName,
        orgName: this.baseInfo.org || ''
      }).then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      });
    });
    /*if(!this.checkForm('baseInfoForm'))return;*/
  }


}
