import krData from 'krData';
import InvestmentService from '../investment/investment.service';

class TestAPI extends krData.API {

}

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q')
export default class investmentIndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  investmentService = new InvestmentService();

  init() {

    this.listData = {
      data: []
    };

    this.dataLoading = false;

    this.paramsData = {};

    this.currentPage = 1;

    this.$scope.$on('get-list',(e,d) => {
      this.listData = d.investments;
      this.dataLoading = false;
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
    this.investmentService.getList(this.$stateParams.id,params).then(data => {
    console.log(data);
      if(!data.investments || !data.investments.data){
          this.noMore = true;
          return;
      }

      if (data.investments.page >= data.investments.totalPages) {
        this.noMore = true;
        this.loadEnd = true;
      } else {
        this.dataLoading = false;
      }
      angular.forEach(data.investments.data,(item) => {
        this.listData.data.push(item);
      });
      this.dataLoading = false;
    });
  }

  closeMe () {
    this.$scope.parentVm.open.sideBar = false;
  }

}

