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
    this.moreData = true;
    phantom.renderAsync([
      this.getBannerList(),
      this.getProject(),
      this.getFundExpress(),
      this.getHot(),
      this.recommendPro(),
      this.seoService.indexSeo(),
    ]);
    this.scrollData();
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

  scrollData(){
    var vm = this;
    $('.layer-container').on('scroll',function(){
      var viewH =$(this).height();
      var contentH =$(this).get(0).scrollHeight;
      var scrollTop = $('.layer-container').scrollTop();
      if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
        vm.loadMore((vm.page+1));
        vm.page = vm.page+1 ;
     }
    });
  }

  loadMore(p){
    if (this.dataLoading) return;
    this.dataLoading = true;
    const params = {
      pageSize: 10,
      page: p? p : this.page,
    };
    return this.projectService.indexFundExpress(params).then(data => {
      if (this.fundExpress) {
        angular.forEach(data,(item) => {
          this.fundExpress.push(item);
        });
        this.dataLoading = false;
      }else {
        this.fundExpress = data;
      }
      if(data.length < 10){
        this.moreData = false;
      }
    }).catch(() => {
    });
  }

}
