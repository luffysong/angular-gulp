import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state','$scope', '$q', 'user', 'ngDialog')
export default class listIndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.listData = {
      data: []
    };

    this.paramsData = {};

    this.currentPage = 1;
    this.dataLoading = true;

    this.$scope.$on('get-list',(e,d) => {
      this.listData = d;
      this.dataLoading = false;
    });

    this.handleActive();

  }

  collect() {
    if(!this.user.isLogin) {
      this.$scope.root.user.ensureLogin();
    }else if (!this.user.isInvestor()) {
      this.investor();
    }
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

  /*根据路由参数激活*/
  handleActive() {
    /*var obj = {};*/
    angular.forEach(this.$stateParams,(val,key) => {
      if(val || parseInt(val) === 0) {
        this.paramsData[key] = val;
      }
    });
    this.$scope.$emit('get-change',this.paramsData);
  }

  /*过滤不限条件*/
  paramsFilter(target) {
    var o = Object.assign({},target);
    Object.keys(o).forEach((item) => {
      if(o[item] === 'unlimited'){
        delete o[item];
      }
    });
    return o;
  }


  triggerCollect (id) {
    if(this.cid === id || !this.user.isLogin)return;
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
  loadMore ()  {

    if(this.dataLoading) return;
    if (this.needAuthorizeInvestor()) {
      this.dataLoading = false;
      return;
    }
    this.dataLoading = true;
    this.currentPage++;

    var params = Object.assign({columnId:this.$stateParams.columnId || 0,p:this.currentPage},this.paramsFilter(this.paramsData));
    this.projectService.getColumn(params).then(data => {
      this.isInvestorLimit = data.isInvestorLimit;
      this.userIsInvestor = data.userIsInvestor;
      this.isLogin = data.isLogin;
      if(!data.pageData || !data.pageData.data){
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
      }
      if(data.pageData.page === this.currentPage) {
        angular.forEach(data.pageData.data,(item) => {
          this.listData.data.push(item);
        });
      } else {
        this.currentPage = data.pageData.page;
      }
    });

  }

  change (item,index) {
    this.activeIndex = index;
    this.status = '';
    const form = {
      cid: this.cid,
      groupId: item.id,
    };
    if (item.followed) {
      this.projectService.collectCompany(form)
        .then(() => {
          this.status = 'suc';
          setTimeout(() => {
            this.status = '';
          }, 2000);
          ++item.count;
        });
    } else {
      this.projectService.deconsteCompany(form)
        .then(() => {
          this.status = 'cancel';
          setTimeout(() => {
            this.status = '';
          }, 2000);
          --item.count;
        });
    }
  }

  create () {
    if(!this.collectionName)return;
    this.projectService.createCollect({
      name:this.collectionName
    }).then(
      (data) => {
        this.suc = true;
        this.collectionName = '';
        setTimeout(() => {
          this.suc = false;
        }, 3000);
        this.projectService.collectCompany({
          cid: this.cid,
          groupId: data.id,
        }).then(() => {
          this.projectService.collect(this.cid).then(
            (data) => this.collections = data
          );
        });
      },(err)=>{
      });
  }

  seeDetail(id) {
    var labelArr = [];
    if(this.$stateParams.label) {
      if(this.$stateParams.label.split(',').length > 1) {
        angular.forEach(this.$stateParams.label.split(','),item => {
          angular.forEach(this.$scope.parentVm.data.label, obj => {
            if(obj.id+'' === item+'') {
              labelArr.push(obj.name);
            }
          });
        });
      }else {
        angular.forEach(this.$scope.parentVm.data.label, obj => {
          if(obj.id+'' === this.$stateParams.label) {
            labelArr.push(obj.name);
          }
        });
      }
    }
    var columnOptions = {
      context: this,
      companyId: id,
      loadMore: this.loadMore.bind(this),
      companies: this.listData.data,
      tags: labelArr,
      closeMe: this.closeMe.bind(this)
    };

    this.$scope.$emit('open-sideBar',columnOptions);
  }

  closeMe () {
    this.$scope.parentVm.open.sideBar = false;
  }

}

