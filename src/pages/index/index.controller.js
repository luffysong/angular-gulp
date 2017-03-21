import { phantom } from 'krData';
import ProjectService from '../project/project.service';

@Inject('$timeout', '$window', '$stateParams', '$state', '$scope', '$q', 'user', 'seoService')
export default class homeController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.closeAnnouncement = window.closeAnnouncement;
    this.page = 1;
    phantom.renderAsync([
      this.getBannerList(),
      this.getProject(),
      this.getFundExpress(),
      this.getHot(),
      this.recommendPro(),
      this.seoService.indexSeo(),
    ]);
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
    return this.projectService.indexRecommendPro().then(data => {
      this.recommendList = data;
    }).catch(() => {
    });
  }

  getBannerList() {
    return this.projectService.getBannerList().then(data => {
      console.log(data);
      this.bannerList = data;
    }).catch(() => {
    });
  }

  getProject() {
    return this.projectService.indexProject().then(data => {
      this.newProject = data;
    }).catch(() => {
    });
  }

  getFundExpress() {
    this.skipPage = true;
    const params = {
      pageSize: 10,
      page: this.page,
    };
    return this.projectService.indexFundExpress(params).then(data => {
      this.fundExpress = data;
      this.skipPage = false;
    }).catch(() => {
    });
  }

  getHot() {
    return this.projectService.getHotLabel().then(data => {
      this.hotLabel = data;
    }).catch(() => {
    });
  }

  openLink(q){
    if (q.s){
        if (q.s.openWay == 1){
          window.location.href= q.s.url;
        }else {
          window.open(q.s.url);
        }
    }
  }

}
