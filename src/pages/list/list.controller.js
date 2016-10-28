import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state','$scope', '$q')
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


  triggerCollect (id) {
    if(this.cid === id)return;
    this.cid = id;
    this.projectService.collect(this.cid).then((data) => {
      this.collections = data;
    });
  };

  loadMore ()  {

    if(this.dataLoading)return;
    this.dataLoading = true;

    this.currentPage++;

    var params = Object.assign({columnId:this.$stateParams.columnId || 0,p:this.currentPage},this.paramsFilter(this.paramsData));
    this.projectService.getColumn(params).then(data => {
      if(!data.pageData || !data.pageData){
        this.noMore = true;
        return;
      }
      angular.forEach(data.pageData.data,(item) => {
        this.listData.data.push(item);
      });
      this.dataLoading = false;
    });

    /*this.$timeout(() => {
      var last = this.listData[this.listData.length - 1];
      for(var i = 1; i <= 8; i++) {
        this.listData.data.push(last + i);
      }
      this.dataLoading = false;
    },500);*/
  }

  change (item,index) {
    this.activeIndex = index;
    const form = {
      cid: this.cid,
      groupId: item.id,
    };
    if (item.followed) {
      this.projectService.collectCompany(form)
        .then(() => {
          this.suc = true;
          setTimeout(() => {
            this.suc = false;
          }, 3000);
          ++item.count;
        });
    } else {
      this.projectService.deconsteCompany(form)
        .then(() => {
          this.cancle = true;
          setTimeout(() => {
            this.cancle = false;
          }, 3000);
          --item.count;
        });
    }
  }

  create () {
    if(!this.collectionName)return;
    this.projectService.createCollect({
      name:this.collectionName
    }).then(
      () => {
        this.suc = true;
        this.collectionName = '';
        setTimeout(() => {
          this.suc = false;
        }, 3000);
        this.projectService.collect(this.cid).then(
          (data) => this.collections = data
        );
      },(err)=>{
      });
  }

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

