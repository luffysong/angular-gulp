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
// import Alert from '../../common/base/Alert';
// import EditFinanceVM from './editFinance.vm';
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
      this.financeVM = new FinanceVM(this.projectData.finance, this.$scope, this.id);
      this.memberVM = new MemberVM(this.projectData.member, this.id);
      this.similarVM = new SimilarVM(this.projectData.similar);
      this.newsVM = new NewsVM(this.projectData.news, this.$scope, this.id);
      this.productVM = new ProductVM(this.projectData.product);
      // this.editFinanceVM = new EditFinanceVM(this.projectData.finance, this.$scope, this.id);
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
      // this.userId = data.id;
      this.talking = talking;
      if (!data.code) {
        // 判断认领人
        if (vm.baseInfoVM.managerUid === data.id) {
          vm.user = 'admin';
        } else if (vm.baseInfoVM.member) {
          // 维护者身份
          vm.user = 'assert';
        } else if (data.investorType < 100) {
          // 投资人
          vm.user = 'investor';
        } else {
          // 普通用户
          vm.user = 'commen';
        }
        vm.claimVM = new ClaimVM(vm.ngDialog, vm.id, vm.user);
        vm.collectionVM = new CollectionVM(vm.ngDialog, vm.id);
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
      if (vm.baseInfoVM.advantage && vm.user != 'commen') {
        vm.light = 277;
      } else if (baseInfo) {
        vm.baseInfo = 277;
      } else if (vm.fundsVM.funds && vm.user != 'commen') {
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
      this.apply = function () {
        vm.projectService.applyBP(vm.id)
        .then((data) => { this.suc = true; });
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
    function send() {
      vm.projectService.sendBP(vm.id)
      .then((data) => { console.log('suc'); });
    }

    // 判断BP查看权限
    this.bpPermission = false;
    this.projectService.getBPPermission(this.id)
    .then((data) => {
      this.bpPermission = true;
    });
    if (this.bpPermission) {
      this.bpLink = 'https://www.baidu.com/';
      this.target = '_blank';
      this.sendbp = send;
    } else {
      this.bpLink = '#';
      this.bp = bp;
      this.sendbp = bp;
    }


    // 获取相关用户
    this.projectService.relateUser({ id: this.id })
    .then((data) => {
      console.log(data);
      // if(data.data){
      //   this.usrShow = true;
      // }
      // this.usrlist = data;
      // this.relateUser = data.slice(0, 3);
    });
    function getMore() {
      this.relateUser = this.usrlist;
      this.usrShow = false;
    }
    this.getMore = getMore;
  }


}
