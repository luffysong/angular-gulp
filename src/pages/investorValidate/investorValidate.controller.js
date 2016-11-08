import krData from 'krData';

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type', '$window',
  '$scope', '$q', '$filter', '$stateParams', '$state', 'createProjectService')
export default class investorValidateController {



  constructor() {

    this.companyIndustry = this.$scope.root.COMPANY_INDUSTRY_META;

    this.followPhase = this.$scope.root.COMPANY_SEARCH_PHASE_META;

    this.step = 1;

    this.user = {};

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


}
