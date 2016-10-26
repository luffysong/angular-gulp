import krData from 'krData';
import BaseInfoVM from './baseInfo.vm';
import IntroductionVM from './introduction.vm';
import FundsVM from './funds.vm';
import FinanceVM from './finance.vm';
import MemberVM from './member.vm';
import SimilarVM from './similar.vm';
import ProductVM from './product.vm';
import ClaimVM from './claim.vm';
import CollectionVM from './collection.vm';
const FINANCE_ALLOW = '1';
// import Alert from '../../common/base/Alert';
// import EditFinanceVM from './editFinance.vm';
@Inject('$stateParams', 'projectService', 'ngDialog', 'resolveData',
  '$validation', '$scope', '$sce', '$state', '$q')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }
  projectData = this.resolveData.projectData;
  init() {
    if (this.projectData) {
      this.id = this.$stateParams.id;
      this.name = this.projectData.baseInfo.name;
      this.baseInfoVM = new BaseInfoVM(this.projectData.baseInfo, this.$scope);
      this.introductionVM = new IntroductionVM(this.projectData.baseInfo, this.$scope);
      this.fundsVM = new FundsVM(this.projectData.funds);
      this.financeVM = new FinanceVM(this.projectData.finance, this.$scope, this.id,
        this.$sce, this.$q);
      this.memberVM = new MemberVM(this.projectData.member, this.id);
      this.similarVM = new SimilarVM(this.projectData.similar);
      this.productVM = new ProductVM(this.projectData.product, this.id);
    }
    this.getRelateUser();
    this.getBPPermission(this.id);
    this.getBPUrl(this.id);
    this.setNavigation();
    this.getUser();
    this.getfundsState(this.id);
  }
  userId;
  getfundsState(cid) {
    const id = {
      id: cid,
    };
    this.projectService.fundState(id)
    .then(data => {
      if (data.state === FINANCE_ALLOW) {
        this.fundsState = true;
      }
    });
  }
  talk() {
    const vm = this;
    function talkController() {
      this.id = vm.id;
      this.talkCancle = function talkCancle() {
        vm.talkDialog.close();
      };
    }
    vm.talkDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/talk.html\'" center></div>',
      plain: true,
      appendTo: '.project-wrapper',
      controller: talkController,
      controllerAs: 'vm',
    });
  }
  investor() {
    const vm = this;
    function investorController() {
      this.investorCancle = function investorCancle() {
        vm.investorDialog.close();
      };
    }
    vm.investorDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/investorLink.html\'" center></div>',
      plain: true,
      appendTo: '.project-wrapper',
      controller: investorController,
      controllerAs: 'vm',
    });
  }
  getUser() {
    // 获取当前用户身份
    this.projectService.getUser()
    .then((data) => {
      this.userId = data.id;
      if (!data.code) {
        // 判断认领人
        if (this.baseInfoVM.managerUid === data.id) {
          this.user = 'admin';
        } else if (this.baseInfoVM.member) {
          // 维护者身份
          this.user = 'assert';
        } else {
          // 普通用户
          this.user = 'commen';
        }
        if (data.investorType < 100) {
          // 投资人
          this.investorType = true;
          this.talking = this.talk;
        } else {
          this.talking = this.investor;
        }
        this.claimVM = new ClaimVM(this.ngDialog, this.id, this.user);
        this.collectionVM = new CollectionVM(this.ngDialog, this.id, data.investorType);
      }
    }, () => {
      this.user = 'commen';
    });
  }

  setNavigation() {
    const first = 300;
    const other = 114;
    // 导航栏定位
    this.baseInfo = other;
    this.financeDetail = other;
    this.financeHistory = other;
    this.light = first;
    const baseInfo = (this.baseInfoVM.industryTag || this.baseInfoVM.intro);
    if (this.baseInfoVM.investAdvantage) {
      this.light = first;
    } else if (baseInfo) {
      this.baseInfo = first;
    } else if (this.fundsVM.funds && this.user !== 'commen' && this.investorType) {
      this.financeDetail = first;
    } else {
      this.financeHistory = first;
    }
  }


  bpDialogs() {
    const vm = this;
    function BPController() {
      this.applyBpStatus = vm.applyBpStatus;
      this.id = vm.id;
      this.BPCancle = function BPCancle() {
        vm.bpDialog.close();
      };
      this.apply = function apply() {
        vm.projectService.applyBP(vm.id)
          .then(() => {
            this.suc = true;
            vm.applyBpStatus = 'APPLY';
          }, (err) => {
            krData.Alert.alert(err.msg);
          });
      };
    }
    vm.bpDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/checkBP.html\'" center></div>',
      plain: true,
      appendTo: '.project-wrapper',
      controller: BPController,
      controllerAs: 'vm',
    });
  }
  send() {
    this.projectService.sendBP(this.id)
      .then(() => {
        if (this.hasPermission) {
          krData.Alert.alert('邮件已发送，请查收');
        } else {
          this.projectService.applyBP(this.id)
            .then(() => {
              this.suc = true;
              this.applyBpStatus = 'APPLY';
            }, (err) => {
              krData.Alert.alert(err.msg);
            });
        }
      }, (err) => {
        if (err.code === 100) {
          // 申请人未设置邮箱
          // const vm = this;
          const outterVM = this;
          function BPController() {
            // this.applyBpStatus = vm.applyBpStatus;
            // this.id = vm.id;
            const vm = this;
            vm.cancel = () => {
              console.log('click cancel');
              outterVM.bpApplyDialog.close();
            };

            vm.confirm = () => {
              const email = vm.email;
              if (email) {
                outterVM.projectService.addBPEmail(email).then(() => {
                  if (outterVM.hasPermission) {
                    outterVM.projectService.sendBP(outterVM.id)
                      .then(() => {
                        krData.Alert.alert('邮件已发送，请查收');
                      });
                  } else {
                    outterVM.projectService.applyBP(outterVM.id)
                    .then(() => {
                      outterVM.suc = true;
                      outterVM.applyBpStatus = 'APPLY';
                      outterVM.bpDialogs();
                      outterVM.bpApplyDialog.close();
                    }, (error) => {
                      krData.Alert.alert(error.msg);
                      outterVM.bpApplyDialog.close();
                    });
                  }
                }, (err1) => {
                  krData.Alert.alert(err1.msg);
                });
              }
            };
          }

          this.bpApplyDialog = this.ngDialog.open({
            template: '<div ng-include="\'/pages/project/templates/addBPEmail.html\'" center></div>',
            plain: true,
            appendTo: '.project-wrapper',
            controller: BPController,
            controllerAs: 'vm',
          });
        } else if (err.code === 200) {
          // 用户超过查看次数或无权查看BP
          krData.Alert.alert('已达到今日浏览上限');
        }
      });
  }


  getBPUrl(id) {
    // 获取BP-URL
    this.projectService.getBPUrl(id)
    .then(data => {
      if (data.bpUrl) {
        this.bpLink = data.bpUrl;
        this.target = '_blank';
      }
    }, () => {
      this.bpLink = '#';
    });
  }
  getBPPermission(id) {
    this.projectService.getBPPermission(id)
    .then((data) => {
      // if (data.hasPermission || data.applyBpStatus === 'AGREE') {
      //   this.sendbp = this.send;
      // } else {
      //   this.applyBpStatus = data.applyBpStatus;
      //   this.bp = this.bpDialogs;
      //   this.sendbp = this.bpDialogs;
      // }
      // this.sendBP = this.send;
      // 项目未设置申请
      this.applyBpStatus = data.applyBpStatus;
      this.hasPermission = data.hasPermission;
      if (data.hasPermission || data.applyBpStatus === 'AGREE') {
        this.sendbp = this.send;
      } else {
        this.bp = this.bpDialogs;
        this.sendbp = this.send;
      }
    });
  }
  getMore() {
    this.relateUser = this.usrlist;
    this.usrShow = false;
  }
  getRelateUser() {
    this.projectService.relateUser({ id: this.id })
    .then((data) => {
      if (data.length > 3) {
        this.usrShow = true;
      }
      this.usrlist = data;
      this.relateUser = data.slice(0, 3);
    });
  }


}
