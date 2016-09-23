import BaseInfoVM from './baseInfo.vm';
import IntroductionVM from './introduction.vm';
import FundsVM from './funds.vm';
import FinanceVM from './finance.vm';
import MemberVM from './member.vm';
import SimilarVM from './similar.vm';
import NewsVM from './news.vm';
import ProductVM from './product.vm';
import ClaimVM from './claim.vm';
@Inject('$stateParams', 'projectService', 'projectData', 'ngDialog', '$validation', '$scope')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    if (this.projectData) {
      this.baseInfoVM = new BaseInfoVM(this.projectData.baseInfo, this.$scope);
      this.introductionVM = new IntroductionVM(this.projectData.introduction);
      this.fundsVM = new FundsVM(this.projectData.funds);
      this.financeVM = new FinanceVM(this.projectData.finance);
      this.memberVM = new MemberVM(this.projectData.member);
      this.similarVM = new SimilarVM(this.projectData.similar);
      this.newsVM = new NewsVM(this.projectData.news);
      this.productVM = new ProductVM(this.projectData.product);
      this.claimVM = new ClaimVM(this.ngDialog);
    }
    let talkDialog;
    function talkController() {
      this.talkCancle = function () {
        talkDialog.close();
      };
    }
    const str = '<div ng-include="' +
    "'" + '/pages/project/templates/talk.html' + "'" +
    '" center>/div>';
    function talking() {
      talkDialog = this.ngDialog.open({
        template: str,
        plain: true,
        appendTo: '.project-wrapper',
        controller: talkController,
        controllerAs: 'vm',
      });
    }


    this.talking = talking;
  }


}
