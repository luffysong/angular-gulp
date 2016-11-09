import krData from 'krData';
import InvestorInfoService from '../investorInfo/investorInfo.service';

@Inject('$stateParams', 'ngDialog', 'resolveData',
  '$validation', '$scope', '$sce', '$state', '$q', '$filter')
export default class investorInfoController {
  constructor() {
    this.init();
  }
  investorInfoService = new InvestorInfoService();

  init() {
    this.getInvestorInfo(this.$stateParams.id);
    this.getInvestmentInfo(this.$stateParams.id);
    this.moreBtn = 'close';
    this.more = false;
    console.log(this.moreBtn);
    console.log(this.more);
  }

  getInvestorInfo(id) {
    this.investorInfoService.getInfo(id)
    .then(data => {
        this.basic = data.basic;
        this.investPreference = data.investPreference;
        this.org = data.org;
    });
  }

  getInvestmentInfo(id) {
    this.investorInfoService.getInvestment(id)
    .then(data => {
        this.investment = data;
    });
  }

  moreShow(state) {
    this.moreBtn = state;
    if(state == 'close'){
        this.more = true;
    }
    console.log(this.moreBtn);
    console.log(this.more);
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


  bpDialogs(className = '') {
    const vm = this;
    function BPController() {
      this.applyBpStatus = vm.applyBpStatus;
      this.id = vm.id;
      this.projectVm = vm;
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
          function BPController($validation,$scope) {
            // this.applyBpStatus = vm.applyBpStatus;
            // this.id = vm.id;
            const vm = this;
            vm.cancel = () => {
              console.log('click cancel');
              outterVM.bpApplyDialog.close();
            };

            vm.confirm = () => {
              console.log(vm.email);
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
            template:
              '<div ng-include="\'/pages/project/templates/addBPEmail.html\'" center></div>',
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
