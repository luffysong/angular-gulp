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

  init() {

    this.handleActive();

    this.getCollect();

    this.listData = [1112,2,3,4,5,6,7];

    this.dataLoading = false;

    this.loadMore = () => {
      if(this.dataLoading)return;
      this.dataLoading = true;
      this.$timeout(() => {
        var last = this.listData[this.listData.length - 1];
        for(var i = 1; i <= 8; i++) {
          this.listData.push(last + i);
        }
        this.dataLoading = false;
      },500);

    };

    const projectService = new ProjectService();

    this.triggerCollect = (id) => {
      if(this.cid === id)return;
      this.cid = id;
      projectService.collect(this.cid).then((data) => {
        this.collections = data;
      });
    };

    this.create = () => {
      if(!this.collectionName)return;
      console.log(this.collectionName);
      projectService.createCollect({
        name:this.collectionName
      }).then(
          () => {
          this.suc = true;
          this.collectionName = '';
          setTimeout(() => {
            this.suc = false;
          }, 3000);
          projectService.collect(this.cid).then(
            (data) => this.collections = data
          );
        },(err)=>{
        });
    };

    this.change = (item,index) => {
      this.activeIndex = index;
      const form = {
        cid: this.cid,
        groupId: item.id,
      };
      if (item.followed) {
        projectService.collectCompany(form)
          .then(() => {
            this.suc = true;
            setTimeout(() => {
              this.suc = false;
            }, 3000);
            ++item.count;
          });
      } else {
        projectService.deconsteCompany(form)
          .then(() => {
            this.cancle = true;
            setTimeout(() => {
              this.cancle = false;
            }, 3000);
            --item.count;
          });
      }
    };
  }

  /*根据路由参数激活*/
  handleActive() {
    var obj = {};
    angular.forEach(this.$stateParams,(val,key) => {
      if(val) {
        obj[key] = val;
      }
    });
    this.$scope.$emit('get-change',obj);
  }

  getCollect() {

  }


}

