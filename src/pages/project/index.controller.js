import BaseInfoVM from './baseInfo.vm';
import FundsVM from './funds.vm';
import FinanceVM from './finance.vm';
import MemberVM from './member.vm';
import SimilarVM from './similar.vm';
import NewsVM from './news.vm';
@Inject('$stateParams', 'projectService', 'projectData')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    this.baseInfoVM = new BaseInfoVM(this.projectData.baseInfo);
    this.fundsVM = new FundsVM(this.projectData.funds);
    this.financeVM = new FinanceVM(this.projectData.finance);
    this.memberVM = new MemberVM(this.projectData.member);
    this.similarVM = new SimilarVM(this.projectData.similar);
    this.newsVM = new NewsVM(this.projectData.news);
  }
}
