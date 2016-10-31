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


  // triggerCollect (id) {
  //   if(this.cid === id)return;
  //   this.cid = id;
  //   this.OrganizationService.collect(this.cid).then((data) => {
  //     this.collections = data;
  //   });
  // };

  loadMore() {
    console.log(this.dataLoading);
    if(this.dataLoading)return;
    this.dataLoading = true;

    this.currentPage++;
    var params = Object.assign({columnId:this.$stateParams.columnId || 0,page:this.currentPage},this.paramsFilter(this.paramsData));
    console.log(params);
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

  // change (item,index) {
  //   this.activeIndex = index;
  //   const form = {
  //     cid: this.cid,
  //     groupId: item.id,
  //   };
  //   if (item.followed) {
  //     this.OrganizationService.collectCompany(form)
  //       .then(() => {
  //         this.suc = true;
  //         setTimeout(() => {
  //           this.suc = false;
  //         }, 3000);
  //         ++item.count;
  //       });
  //   } else {
  //     this.OrganizationService.deconsteCompany(form)
  //       .then(() => {
  //         this.cancle = true;
  //         setTimeout(() => {
  //           this.cancle = false;
  //         }, 3000);
  //         --item.count;
  //       });
  //   }
  // }

  // create () {
  //   if(!this.collectionName)return;
  //   this.OrganizationService.createCollect({
  //     name:this.collectionName
  //   }).then(
  //     () => {
  //       this.suc = true;
  //       this.collectionName = '';
  //       setTimeout(() => {
  //         this.suc = false;
  //       }, 3000);
  //       this.projectService.collect(this.cid).then(
  //         (data) => this.collections = data
  //       );
  //     },(err)=>{
  //     });
  // }

  seeDetail(id) {
    var columnOptions = {
      companyId: id,
      loadMore: this.loadMore.bind(this),
      companies: this.listData.data,
      tags: this.$stateParams.label ? this.$stateParams.label.split(',') : '',
      closeMe: this.closeMe.bind(this)
    };

    this.$scope.$emit('open-sideBar',columnOptions);
  }

  closeMe () {
    this.$scope.parentVm.open.sideBar = false;
  }

  getDict() {

  }


}

