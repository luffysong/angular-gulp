import krData from 'krData';
import InvestorService from '../investorList/investorList.service';

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q','$location')
export default class investorListIndexController {

  constructor() {
    this.init();
  }

  investorService = new InvestorService();

  init() {

    this.listData = {
      data: []
    };

    this.currentPage = this.$location.search().p || 1;

    this.dataLoading = false;

    this.paramsData = {};

    this.$scope.$on('get-list',(e,d) => {
      this.listData = d.pageData;
      this.dataLoading = false;
    });

    this.handleActive();
    this.$state.go('investorList.result.page');
  }

  /*根据路由参数激活*/
  handleActive() {
    /*var obj = {};*/
    angular.forEach(this.$stateParams,(val,key) => {
      if(val) {
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

  loadMore() {
    if(this.dataLoading)return;
    this.dataLoading = true;

    this.currentPage++;
    this.$scope.$broadcast('change-page', this.currentPage);
    this.paramsData['p'] = this.currentPage;
    var params = Object.assign({p:this.currentPage},this.paramsFilter(this.paramsData));
    this.investorService.getList(params).then(data => {
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

      angular.forEach(data.pageData.data,(item) => {
        this.listData.data.push(item);
      });
      this.dataLoading = false;
    });
  }

  closeMe () {
    this.$scope.parentVm.open.sideBar = false;
  }

}

