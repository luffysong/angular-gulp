import BaseInfoVM from './baseInfo.vm';
@Inject('$stateParams', 'projectService')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    this.loadCompanyBaseInfo();
  }

  loadCompanyBaseInfo() {
    this.projectService.allData({
      id: this.$stateParams.id,
    }).then((data) => {
      this.baseInfoVM = new BaseInfoVM(data.baseInfo);
    });
  }
}
