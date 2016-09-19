import BaseInfoVM from './baseInfo.vm';
@Inject('$stateParams', 'projectService', 'projectData')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    this.baseInfoVM = new BaseInfoVM(this.projectData.baseInfo);
  }
}
