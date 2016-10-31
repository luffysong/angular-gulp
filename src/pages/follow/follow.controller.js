import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('followIndexService', '$timeout', '$window','$stateParams','$state','$scope', '$q')
export default class followIndexController {

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
        if(key === 'labelId' && val) {
          this.hasSelect = true;
        }
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

    if(!this.$stateParams.labelId){
      var params = Object.assign({columnId:this.$stateParams.columnId || 0,p:this.currentPage},this.paramsFilter(this.paramsData));
      this.projectService.getColumn(params).then(data => {
        this.dataHandle(data);
      });
    }else {
      var params = Object.assign({p:this.currentPage},this.paramsFilter(this.paramsData));
      this.projectService.getFollowCompany(params).then(data => {
        this.dataHandle(data);
      });
    }

  }

  dataHandle(data) {
    if(!data.pageData || !data.pageData.data || !data.pageData.data.length){
      this.noMore = true;
      return;
    }
    this.newCompanyCnt = data.newCompanyCnt;
    if(data.pageData.page === this.currentPage) {
      angular.forEach(data.pageData.data,(item) => {
        this.listData.data.push(item);
      });
    } else {
      this.currentPage = data.pageData.page;
    }
    this.dataLoading = false;
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

}

