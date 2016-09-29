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
    }

    let talkDialog;
    let bpDialog;
    const vm = this;
    const talkHtml = '<div ng-include="' +
    "'" + '/pages/project/templates/talk.html' + "'" +
    '" center>/div>';
    const BPHtml = '<div ng-include="' +
    "'" + '/pages/project/templates/checkBP.html' + "'" +
    '" center>/div>';
    // 获取当前用户身份
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
        vm.collectionVM = new CollectionVM(vm.ngDialog, vm.id);
      } else if (data.code === 403) {

      }
    });


    function talkController() {
      this.talkCancle = function () {
        talkDialog.close();
      };
    }
    function talking() {
      talkDialog = this.ngDialog.open({
        template: talkHtml,
        plain: true,
        appendTo: '.project-wrapper',
        controller: talkController,
        controllerAs: 'vm',
      });
    }

    // 导航栏定位
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
    // BP弹窗
    function BPController() {
      this.BPCancle = function () {
        bpDialog.close();
      };
    }
    function bp() {
      bpDialog = this.ngDialog.open({
        template: BPHtml,
        plain: true,
        appendTo: '.project-wrapper',
        controller: BPController,
        controllerAs: 'vm',
      });
    }

    // 判断BP查看权限
    this.projectService.getBPPermission(this.id)
    .then((data)=>{console.log(data)});
    const bpPermission = false;
    if (bpPermission) {
      this.bpLink = 'https://www.baidu.com/';
      this.target = '_blank';
    } else {
      this.bpLink = '#';
      this.bp = bp;
    }

    this.talking = talking;
  }


}
