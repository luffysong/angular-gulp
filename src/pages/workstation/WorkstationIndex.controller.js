import WorkstationIndexService from './WorkstationIndex.service';
@Inject('$stateParams', 'resolveData','$validation', '$scope', '$sce', '$state', '$q', '$filter')
export default class WorkstationIndexController {
  constructor() {
    this.init();
  }
  // workstationService = new WorkstationIndexService();

  init() {
    // this.getworkstation(this.$stateParams.id);
    // this.getInvestmentInfo(this.$stateParams.id);
    // this.$scope.investorEditVM = investorEditVM;
    // this.moreCase = false;
  }


  getInvestmentInfo(id) {
    this.workstationService.getInvestment(id)
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
    this.workstationService.changeInvestmenVisible(cid,state)
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
}
