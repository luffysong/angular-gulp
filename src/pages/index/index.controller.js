import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$timeout', '$window', '$stateParams', '$state', '$scope', '$q', 'user')
export default class homeController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.page = 1;

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
      this.recommendList = data;
    }).catch(() => {
    });
  }

  getProject() {
    this.projectService.indexProject().then(data => {
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
      this.fundExpress = data;
    }).catch(() => {
    });
  }

  getHot() {
    this.projectService.getHotLabel().then(data => {
      this.hotLabel = data;
    }).catch(() => {
    });
  }
}




