import krData from 'krData';
import BaseInfoVM from './baseInfo.vm';
import IntroductionVM from './introduction.vm';
import FundsVM from './funds.vm';
import FinanceVM from './finance.vm';
import MemberVM from './member.vm';
import SimilarVM from './similar.vm';
import ProductUserPortraitsVM from './ProductUserPortraits.vm.js';
import ClaimVM from './claim.vm';
import CollectionVM from './collection.vm';
import ProductVM from './product.vm.js';
import CompanyIntroduceVM from './companyIntroduce.vm';
import ExposureVM from './exposure.vm.js';
import NewsVM from './news.vm';
const FINANCE_ALLOW = '1';
const FINANCE_AUDITING = '2';
const BP_PERMISSION = {
  APPLY: 'APPLY',
  AGREE: 'AGREE',
  REFUSE: 'REFUSE',
};

const BP_PERMISSION_MORE_CODE = 100;
@Inject('$stateParams', 'projectService', 'ngDialog', 'resolveData',
  '$validation', '$scope', '$sce', '$state', '$q', '$filter', '$timeout')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }
  bpError = {};
  userId;
  projectData = this.resolveData.projectData;
  init() {
    if (this.projectData) {
      this.id = this.projectData.baseInfo.id;
      this.attachCid = this.projectData.baseInfo.attachCid;
      this.name = this.projectData.baseInfo.name;
      this.baseInfoVM = new BaseInfoVM(this.ngDialog, this.projectData.baseInfo, this.$scope);
      this.introductionVM = new IntroductionVM(this.ngDialog, this.projectData.baseInfo, this.$scope);
      this.fundsVM = new FundsVM(this.projectData.funds);
      this.financeVM = new FinanceVM(this.ngDialog, this.projectData.finance, this.$scope, this.id,
        this.$sce, this.$q);
      this.memberVM = new MemberVM(this.ngDialog, this.projectData.member, this.id);
      this.similarVM = new SimilarVM(this.projectData.similar);
      this.companyIntroduceVM = new CompanyIntroduceVM(this.projectData.baseInfo, this.id);
      this.setVM();
      this.newsVM = new NewsVM(this.projectData.news, this.$scope, this.id);
    }
    this.getRelateUser();
    // this.getBPPermission(this.id);
    this.getExistBP(this.id);
    this.setNavigation();
    this.getUser();
    this.getfundsState(this.id);
  }

  setVM() {
    const $scope = this.$scope;
    const data = this.projectData;
    $scope.userPortraitsVm = new ProductUserPortraitsVM(data.product.userPortraits);
    $scope.productVM = new ProductVM(data.product);
    $scope.exposureVM = new ExposureVM(data.product);
  }
  getfundsState(cid) {
    const id = {
      id: cid,
    };
    this.projectService.fundState(id)
      .then(data => {
        if (data.state === FINANCE_ALLOW || data.state === FINANCE_AUDITING) {
          this.fundsState = true;
          this.financeState = data.state;
        }
      });
  }
  talk() {
    const vm = this;

    function talkController() {
      this.id = vm.id;
      this.attachCid = vm.attachCid;
      this.talkCancle = function talkCancle() {
        vm.talkDialog.close();
      };
    }
    vm.talkDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/talk.html\'" center></div>',
      plain: true,
      appendTo: '#projectDetailWrapper',
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
      this.goInvest = function() {
        vm.investorDialog.close();
        vm.$timeout(() => vm.$state.go('investorValidate'), 1000);
      };
    }
    vm.investorDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/investorLink.html\'" center></div>',
      plain: true,
      appendTo: '#projectDetailWrapper',
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
            this.$state.go('project.edit', {
              id: this.id,
            });
            return
          } else if (this.baseInfoVM.member) {
            // 维护者身份
            this.user = 'assert';
            this.$state.go('project.edit', {
              id: this.id,
            });
            return
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


  bpDialogs(className = '') {
    const vm = this;

    function BPController() {
      this.applyBpStatus = vm.applyBpStatus;
      this.id = vm.id;
      this.attachCid = vm.attachCid;
      this.projectVm = vm;
      this.BPCancle = function BPCancle() {
        vm.bpDialog.close();
      };
      // this.apply = function apply() {
      //   vm.projectService.applyBP(vm.id)
      //     .then(() => {
      //       this.suc = true;
      //       vm.applyBpStatus = 'APPLY';
      //     }, (err) => {
      //       krData.Alert.alert(err.msg);
      //     });
      // };
    }
    vm.bpDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/checkBP.html\'" center></div>',
      plain: true,
      appendClassName: className,
      appendTo: '#projectDetailWrapper',
      controller: BPController,
      controllerAs: 'vm',
    });
  }
  send() {
    this.projectService.sendBP(this.id)
      .then((data) => {
        if (this.hasPermission) {
          krData.Alert.alert(`邮件已发送至${data.email}，请查收`);
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
          /* eslint-disable */
          function BPController($validation, $scope) {
            // this.applyBpStatus = vm.applyBpStatus;
            // this.id = vm.id;
            const vm = this;
            vm.cancel = () => {
              outterVM.bpApplyDialog.close();
            };

            vm.confirm = () => {
              if (vm.form.$valid) {
                const email = vm.email;
                if (email) {
                  outterVM.projectService.addBPEmail(email).then(() => {
                    if (outterVM.hasPermission) {
                      outterVM.projectService.sendBP(outterVM.id)
                        .then((data) => {
                          krData.Alert.alert(`邮件已发送至${data.email}，请查收`);
                          outterVM.bpApplyDialog.close();
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
              }
              // } else {
              //   krData.Alert.alert('输入的邮箱地址不正确，请更正');
              // }
            };
          }
          /* eslint-enable */

          this.bpApplyDialog = this.ngDialog.open({
            template: '<div ng-include="\'/pages/project/templates/addBPEmail.html\'" center></div>',
            plain: true,
            appendTo: '#projectDetailWrapper',
            controller: ['$validation', '$scope', BPController],
            controllerAs: 'vm',
          });
        } else if (err.code === 201) {
          // 用户超过查看次数
          // krData.Alert.alert('已达到今日浏览上限');
          this.bpDialogs('bp-view-more-wrapper');
        } else if (err.code === 200) {
          const outterVM = this;
          outterVM.bpDialogs();
        } else if (err.code === 1) {
          krData.Alert.alert(err.msg);
        }
      });
  }


  getBPPermission(id) {
    this.projectService.getBPPermission(id)
      .then((data) => {
        this.applyBpStatus = data.applyBpStatus;
        this.hasPermission = data.hasPermission;
      })
      .catch((err) => {
        this.bpError = err;
      }).finally(() => {
        this.bpPermisstionChecked = true;
        this.sendbp = this.send;
      });
  }

  getExistBP(id) {
    this.projectService.existBP(id)
      .then((data) => {
        this.existBP = data.exist;
      })
  }

  isViewMore() {
    return this.bpError.code === BP_PERMISSION_MORE_CODE;
  }

  checkBp(e) {
    if (!this.bpPermisstionChecked) {
      e.preventDefault();
      return;
    }
    if (this.hasPermission) {
      return;
    }
    if (this.isViewMore()) {
      this.bpDialogs('bp-view-more-wrapper');
    } else if (this.applyBpStatus === BP_PERMISSION.REFUSE) {
      krData.Alert.alert('创业者拒绝查看BP');
      // } else if (this.applyBpStatus === BP_PERMISSION.APPLY) {
      //   this.bpDialogs();
    } else {
      this.bpDialogs();
    }
    e.preventDefault();
  }
  getMore() {
    this.relateUser = this.usrlist;
    this.usrShow = false;
  }
  getRelateUser() {
    this.projectService.relateUser({
        id: this.id
      })
      .then((data) => {
        if (data.length > 3) {
          this.usrShow = true;
        }
        this.usrlist = data;
        this.relateUser = data.slice(0, 3);
      });
  }


}