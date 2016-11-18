import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q', 'user', 'parallaxHelper')
export default class homeController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.columnLoading = true;
    this.labelLoading = true;

    console.warn(this.parallaxHelper);
    this.background = this.parallaxHelper.createAnimator(-0.3);
    this.bannerList = [
      {
        title: '海量优质项目任你选'
      },{
        title: '专属行业订阅为你「配对」'
      },{
        title: '随时随地对接顶级投资人'
      }
    ];
    this.getColumn();
    this.getTag();
    this.getInvestor();
  }


  getColumn() {
    this.projectService.indexColumn().then(data => {
      this.columnData = data;
      this.switchStatus(0);
    }).catch(err => {
      console.log(err);
    });
  }

  getTag() {
    this.projectService.indexLabel().then(data => {
      this.labelData = data;
      this.switchTag(0);
    }).catch(err => {
      console.log(err);
    });
  }

  getInvestor() {
    this.projectService.indexInvestor().then(data => {
      this.investorData = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  switchStatus(i) {
    if(this.statusIndex === i)return;
    this.statusIndex = i;
    this.columnLoading = true;
    this.columnData.columnList.forEach((item,index) => {
      if(index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    });
    this.columnCompany = this.columnData.columnList[i].companyVoList;
    this.columnId = this.columnData.columnList[i].columnId;
    this.$timeout(() => this.columnLoading = false,500);
  }

  switchTag(i) {
    if(this.tagIndex === i)return;
    this.tagIndex = i;
    this.labelLoading = true;
    this.labelData.columnList.forEach((item,index) => {
      if(index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    });
    this.labelCompany = this.labelData.columnList[i].companyVoList;
    this.labelId = this.labelData.columnList[i].columnId;
    this.$timeout(() => this.labelLoading = false,500);
  }

  createProject() {
    if(!this.user.isLogin) {
      this.$scope.root.user.ensureLogin();
    }else {
      this.$state.go('createProject');
    }
  }
}

