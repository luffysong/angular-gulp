import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('listIndexService', '$timeout', '$window','$stateParams',
  '$state','$scope', '$q', 'user', 'ngDialog', '$document')
export default class listIndexController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.listData = {
      data: [],
    };
    this.paramsData = {};

    this.currentPage = 1;
    this.dataLoading = true;

    this.$scope.$on('get-list', (e, d) => {
      this.listData = d;
      this.dataLoading = false;
    });

    this.handleActive();
    this.selectedOrder();
  }

  selectedOrder(){
    if(this.$stateParams.sortField === 'STOCK_AT'){
      this.isStockAt = true;
    }else if(this.$stateParams.sortField === 'ADD_COLUMN_LABEL'){
      this.isAddColumnLabel = true;
    } else if(this.$stateParams.sortField === 'START_DATE'){
      this.isStartDate = true;
    }
  }

  collect(i) {
    if (!this.user.isLogin) {
      this.$scope.root.user.ensureLogin();
    } else if (!this.user.isInvestor()) {
      this.investor();
    } else {
      if (this.listData.data[i].followed) return;
      this.projectService.collectCompany({
        cid: this.cid,
        groupId: 0,
      })
      .then(() => {
        this.listData.data[i].followed = true;
        this.projectService.collect(this.cid).then((data) => { this.collections = data; }
        );
      });
    }
  }

  investor() {
    const vm = this;
    function investorController() {
      this.investorCancle = function investorCancle() {
        vm.investorDialog.close();
      };
      this.goInvest = function () {
        vm.investorDialog.close();
        vm.$timeout(() => vm.$state.go('investorValidate'), 1000);
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

  /* 根据路由参数激活 */
  handleActive() {
    angular.forEach(this.$stateParams,(val, key) => {
      if (val || parseInt(val) === 0) {
        this.paramsData[key] = val;
      }
    });
    this.$scope.$emit('get-change',this.paramsData);
  }

  /* 过滤不限条件 */
  paramsFilter(target) {
    const o = Object.assign({}, target);
    Object.keys(o).forEach((item) => {
      if (o[item] === 'unlimited') {
        delete o[item];
      }
    });
    return o;
  }


  triggerCollect(id) {
    if (this.cid === id || !this.user.isLogin) return;
    this.cid = id;
    this.projectService.collect(this.cid).then((data) => {
      this.collections = data;
    });
  };

  needAuthorizeInvestor() {
    return this.isInvestorLimit && !this.userIsInvestor;
  }

  login() {
    krData.utls.login();
  }
  loadMore() {
    if (this.dataLoading) return;
    if (this.needAuthorizeInvestor()) {
      this.dataLoading = false;
      return;
    }
    this.dataLoading = true;
    this.currentPage++;

    const params = Object.assign({ columnId: this.$stateParams.columnId || 0, p: this.currentPage },
      this.paramsFilter(this.paramsData));
    this.projectService.getColumn(params).then(data => {
      this.isInvestorLimit = data.isInvestorLimit;
      this.userIsInvestor = data.userIsInvestor;
      this.isLogin = data.isLogin;
      if (!data.pageData || !data.pageData.data){
        this.noMore = true;
        return;
      }
      if (data.pageData.page >= data.pageData.totalPages) {
        this.noMore = true;
        this.loadEnd = true;
      } else {
        this.dataLoading = false;
      }

      if (!this.isLogin && data.pageData.page === 10) {
        this.needLogin = true;
        this.noMore = true;
      }
      if (data.pageData.page === this.currentPage) {
        angular.forEach(data.pageData.data,(item) => {
          this.listData.data.push(item);
        });
      } else {
        this.currentPage = data.pageData.page;
      }
    });

  }

  change(item, index) {
    this.activeIndex = index;
    this.status = '';
    const form = {
      cid: this.cid,
      groupId: item.id,
    };
    if (item.followed) {
      this.projectService.collectCompany(form)
        .then(() => {
          this.handleCollect();
          this.status = 'suc';
          this.$timeout(() => {
            this.status = '';
          }, 2000);
          ++item.count;
        });
    } else {
      this.projectService.deconsteCompany(form)
        .then(() => {
          this.cancelCollect();
          this.status = 'cancel';
          this.$timeout(() => {
            this.status = '';
          }, 2000);
          --item.count;
        });
    }
  }


  handleCollect() {
    this.listData.data.forEach(obj => {
      if (obj.id === this.cid) {
        obj.followed = true;
      }
    });
  }

  cancelCollect() {
    let isEmpty = true;
    this.collections.forEach(item => {
      if (item.followed) {
        isEmpty = false;
      }
    });
    if (isEmpty) {
      this.listData.data.forEach(obj => {
        if (obj.id === this.cid) {
          obj.followed = false;
        }
      });
    }
  }

  create(i) {
    if (!this.collectionName) return;
    this.projectService.createCollect({
      name: this.collectionName,
    }).then(
      (data) => {
        this.createSuc = true;
        this.collectionName = '';
        this.$timeout(() => {
          this.createSuc = false;
        }, 2000);
        this.projectService.collectCompany({
          cid: this.cid,
          groupId: data.id,
        }).then(() => {
          this.listData.data[i].followed = true;
          this.projectService.collect(this.cid).then((d) => { this.collections = d; });
        });
      }, (err) => {
        this.errMsg = err.msg;
        this.$timeout(() => {
          this.errMsg = '';
        }, 2000);
      });
  }

  seeDetail(id) {
    const labelArr = [];
    Object.keys(this.$stateParams).forEach(key => {
      if (this.$stateParams[key]) {
        if (String(this.$stateParams[key]).split(',').length > 1) {
          angular.forEach(this.$stateParams[key].split(','), item => {
            angular.forEach(this.$scope.parentVm.data[key], obj => {
              if (`${obj.id}` === `${item}` && labelArr.indexOf(obj.name) < 0) {
                labelArr.push(obj.name);
              } else if (`${obj.value}` === `${item}` && labelArr.indexOf(obj.desc) < 0) {
                labelArr.push(obj.desc);
              }
            });
          });
        } else {
          angular.forEach(this.$scope.parentVm.data[key], obj => {
            if (obj.id !== 'unlimited' && obj.value !== 'unlimited') {
              if (`${obj.id}` === this.$stateParams[key] &&
                labelArr.indexOf(obj.name) < 0) {
                labelArr.push(obj.name);
              } else if (`${obj.value}` === this.$stateParams[key] &&
                labelArr.indexOf(obj.desc) < 0) {
                labelArr.push(obj.desc);
              }
            }
          });
        }
      }
    });
    const columnOptions = {
      context: this,
      companyId: id,
      loadMore: this.loadMore.bind(this),
      companies: this.listData.data,
      tags: labelArr,
      closeMe: this.closeMe.bind(this),
    };

    this.$scope.$emit('open-sideBar', columnOptions);
  }

  closeMe() {
    this.$scope.parentVm.open.sideBar = false;
  }

  clickFilter(item, type) {
    angular.forEach(this.$scope.parentVm.itemList, o => {
      if (o.name === type) {
        const key = o.key;
        angular.forEach(this.$scope.parentVm.data[type], (obj, index) => {
          if (obj[key] === item) {
            this.$scope.parentVm.selectIndustry(index, type);
          }
        });
      }
    });
  }

  valLogin(e) {
    if (!this.user.isLogin) {
      this.$scope.root.user.ensureLogin();
      e.preventDefault();
    }
  }

}

