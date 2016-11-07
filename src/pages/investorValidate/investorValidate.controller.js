import krData from 'krData';

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type', '$window',
  '$scope', '$q', '$filter', '$stateParams', '$state', 'createProjectService')
export default class investorValidateController {



  constructor() {

    this.companyIndustry = this.$scope.root.COMPANY_INDUSTRY_META;

    this.followPhase = this.$scope.root.COMPANY_SEARCH_PHASE_META;

    this.step = 2;

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
    console.log(this.$scope.root.COMPANY_INDUSTRY_META);
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


}
