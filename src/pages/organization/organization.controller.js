import krData from 'krData';
import OrganizationService from '../organization/organization.service';

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q','$location')
export default class organizationIndexController {

  constructor() {
    this.init();
  }

  organizationService = new OrganizationService();

  init() {

    this.listData = {
      data: []
    };

    this.currentPage = this.$location.search().p || 1;

    this.dataLoading = false;

    this.paramsData = {};

    this.currentPage = 1;

    this.$scope.$on('get-list',(e,d) => {
      this.listData = d;
      this.dataLoading = false;
    });

    this.handleActive();
    this.$state.go('organization.result.page');
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
    this.paramsData['page'] = this.currentPage;
    var params = Object.assign({page:this.currentPage},this.paramsFilter(this.paramsData));
    this.organizationService.getList(params).then(data => {
      if(!data.org || !data.org.data){
          this.noMore = true;
          return;
      }

      if (data.org.page >= data.org.totalPages) {
        this.noMore = true;
        this.loadEnd = true;
      } else {
        this.dataLoading = false;
      }
      angular.forEach(data.org.data,(item) => {
        this.listData.data.push(item);
      });
      this.dataLoading = false;
    });
  }

  closeMe () {
    this.$scope.parentVm.open.sideBar = false;
  }

}

