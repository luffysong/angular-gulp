import BaseInfoVM from './baseInfo.vm';
import IntroductionVM from './introduction.vm';
import FundsVM from './funds.vm';
import FinanceVM from './finance.vm';
import MemberVM from './member.vm';
import SimilarVM from './similar.vm';
import NewsVM from './news.vm';
import ProductVM from './product.vm';
import ClaimVM from './claim.vm';
import CollectionVM from './collection.vm';
@Inject('$stateParams', 'projectService', 'projectData', 'ngDialog', '$validation', '$scope')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    if (this.projectData) {
      this.id = this.$stateParams.id;
      this.baseInfoVM = new BaseInfoVM(this.projectData.baseInfo, this.$scope);
      this.introductionVM = new IntroductionVM(this.projectData.baseInfo, this.$scope);
      this.fundsVM = new FundsVM(this.projectData.funds);
      this.financeVM = new FinanceVM(this.projectData.finance);
      this.memberVM = new MemberVM(this.projectData.member);
      this.similarVM = new SimilarVM(this.projectData.similar);
      this.newsVM = new NewsVM(this.projectData.news);
      this.productVM = new ProductVM(this.projectData.product);
      this.collectionVM = new CollectionVM(this.ngDialog, this.projectData.collection, this.id);
    }

    let talkDialog;
    const vm = this;

    this.projectService.getUser()
    .then((data) => {
      if (!data.code) {
        // 判断认领人
        if (vm.baseInfoVM.managerUid === data.id) {
          vm.user = 'admin';
        } else if (vm.baseInfoVM.member) {
          // 维护者身份
         vm.user = 'assert';
        } else {
          // 普通用户
          vm.user = 'commen';
        }
      vm.claimVM = new ClaimVM(vm.ngDialog, vm.id, vm.user);

      } else if (data.code === 403) {

      }
    });


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
    this.baseInfo = 130;
    this.financeDetail = 130;
    this.financeHistory = 130;
    this.light = 277;
    function setOffset() {
      const baseInfo = (vm.baseInfoVM.industryTag || vm.baseInfoVM.intro);
      if (vm.baseInfoVM.advantage) {
        vm.light = 277;
      } else if (baseInfo) {
        vm.baseInfo = 277;
      } else if (vm.fundsVM.funds) {
        vm.financeDetail = 277;
      } else {
        vm.financeHistory = 277;
      }
    }
    setOffset();


    this.talking = talking;
  }


}
