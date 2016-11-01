import krData from 'krData';
import OrganizationService from '../organization/organization.service';

class TestAPI extends krData.API {

}

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q')
export default class organizationIndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  organizationService = new OrganizationService();

  init() {

    this.listData = {
      data: []
    };

    this.dataLoading = false;

    this.paramsData = {};

    this.currentPage = 1;

    this.$scope.$on('get-list',(e,d) => {
      this.listData = d;
    });

    this.handleActive();
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
    var params = Object.assign({page:this.currentPage},this.paramsFilter(this.paramsData));
    this.organizationService.getList(params).then(data => {
      if(!data.org.data){
          this.noMore = true;
          return;
      }
      angular.forEach(data.org.data,(item) => {
        this.listData.data.push(item);
      });
      this.dataLoading = false;
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

