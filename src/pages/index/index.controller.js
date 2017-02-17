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

  getProject() {
    return this.projectService.indexProject().then(data => {
      this.newProject = data;
    }).catch(() => {
    });
  }

  getFundExpress() {
    this.skipPage = true;
    const params = {
      pageSize: 5,
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
}

