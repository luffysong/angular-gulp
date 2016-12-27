import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$timeout', '$window', '$stateParams', '$state', '$scope', '$q', 'user')
export default class homeController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.columnLoading = true;
    this.labelLoading = true;
    this.unableAnimate = true;
    this.currentIndex = 0;
    this.page = 1;

    /*console.warn(this.parallaxHelper);
    this.background = this.parallaxHelper.createAnimator(-0.3);*/
    this.bannerList = [
      {
        title: '海量优质项目任你选',
        url: '/images/index/bg1.png',
      }, {
        title: '专属行业订阅为你「配对」',
        url: '/images/index/bg2.png',
      }, {
        title: '随时随地对接顶级投资人',
        url: '/images/index/bg3.png',
      },
    ];

    this.getColumn();
    this.getTag();
    this.getInvestor();

    this.getProject();
    this.getFundExpress();
    this.getHot();
    this.recommendPro();
  }

  goPage(type) {
    if (type === 'prev') {
      if (this.page !== 1) {
        this.getFundExpress(--this.page);
      }
    } else {
      this.getFundExpress(++this.page);
    }
  }

  recommendPro() {
    this.projectService.indexRecommendPro().then(data => {
      console.log(data);
      this.recommendList = data;
    }).catch(() => {
    });
  }

  getProject() {
    this.projectService.indexProject().then(data => {
      console.log(data);
      this.newProject = data;
    }).catch(() => {
    });
  }

  getFundExpress() {
    const params = {
      pageSize: 4,
      page: this.page,
    };
    this.projectService.indexFundExpress(params).then(data => {
      console.log(data);
      this.fundExpress = data;
    }).catch(() => {
    });
  }

  getHot() {
    this.projectService.getHotLabel().then(data => {
      console.log(data);
      this.hotLabel = data;
    }).catch(() => {
    });
  }

  getColumn() {
    this.projectService.indexColumn().then(data => {
      this.columnData = data;
      this.switchStatus(0);
    }).catch(() => {
    });
  }

  getTag() {
    this.projectService.indexLabel().then(data => {
      this.labelData = data;
      this.switchTag(0);
    }).catch(() => {
    });
  }

  getInvestor() {
    this.projectService.indexInvestor().then(data => {
      this.investorData = data;
    }).catch(() => {
    });
  }

  switchStatus(i) {
    if (this.statusIndex === i) return;
    this.statusIndex = i;
    this.columnData.columnList.forEach((item, index) => {
      if (`${index}` === `${i}`) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.columnId = this.columnData.columnList[i].columnId;
    this.columnLoading = false;

    /*this.columnCompany = this.columnData.columnList[i].companyVoList;
    this.columnId = this.columnData.columnList[i].columnId;
    this.$timeout(() => this.columnLoading = false,500);*/
  }

  switchTag(i) {
    if (this.tagIndex === i) return;
    this.tagIndex = i;
    this.labelLoading = true;
    this.labelData.columnList.forEach((item,index) => {
      if (`${index}` === `${i}`) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.labelCompany = this.labelData.columnList[i].companyVoList;
    this.labelId = this.labelData.columnList[i].columnId;
    this.$timeout(() => this.labelLoading = false, 500);
  }

  createProject() {
    if (!this.user.isLogin) {
      this.$scope.root.user.ensureLogin();
    } else {
      this.$state.go('createProject');
    }
  }
}




