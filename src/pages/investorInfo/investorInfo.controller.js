import InvestorInfoService from './investorInfo.service';
import InvestorEditVM from './investorEdit.vm';
@Inject('$stateParams', 'ngDialog', 'resolveData',
  '$validation', '$scope', '$sce', '$state', '$q', '$filter')
export default class investorInfoController {
  constructor() {
    this.init();
  }
  investorInfoService = new InvestorInfoService();
  investorData = this.resolveData.investorData;

  init() {
    this.investorData.basic.id = this.$stateParams.id;
    const investorEditVM = new InvestorEditVM(this.investorData, this.$scope);
    this.getInvestorInfo(this.$stateParams.id);
    this.getInvestmentInfo(this.$stateParams.id);
    this.$scope.investorEditVM = investorEditVM;
    this.moreCase = false;
  }

  getInvestorInfo() {
    this.basic = this.investorData.basic;
    this.editable = this.investorData.editable;
    this.investPreference = this.investorData.investPreference;
    this.org = this.investorData.org;
  }

  getInvestmentInfo(id) {
    this.investorInfoService.getInvestment(id)
    .then(data => {
      this.industry = data.industry;
      this.allInvestments = data.voList;
      this.investment = data.voList.slice(0, 4);
    });
  }

  moreShow(cid,state) {
    this.moreBtn = state;
    this.allInvestments.forEach((item) => {
      if(item.cid === cid){
        if (state === 'close') {
          item.moreShow = true;
        } else if (state === 'open') {
          item.moreShow = false;
        }
      }
    });
  }

  showMoreCase() {
    this.moreCase = true;
    this.investment = this.allInvestments;
  }

  changeVisible(cid,state) {
    this.investorInfoService.changeInvestmenVisible(cid,state)
    .then(data => {
      this.allInvestments.forEach((item) => {
        if(item.cid === cid){
          if(item.visible){
            item.visible = false;
          }else{
            item.visible = true;
          }
        }
      });
    });
  }
  // setNavigation() {
  //   const first = 300;
  //   const other = 114;
  //   // 导航栏定位
  //   this.baseInfo = other;
  //   this.financeDetail = other;
  //   this.financeHistory = other;
  //   this.light = first;
  //   const baseInfo = (this.baseInfoVM.industryTag || this.baseInfoVM.intro);
  //   if (this.baseInfoVM.investAdvantage) {
  //     this.light = first;
  //   } else if (baseInfo) {
  //     this.baseInfo = first;
  //   } else if (this.fundsVM.funds && this.user !== 'commen' && this.investorType) {
  //     this.financeDetail = first;
  //   } else {
  //     this.financeHistory = first;
  //   }
  // }

}
