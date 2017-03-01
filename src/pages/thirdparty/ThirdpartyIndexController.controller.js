import krData from 'krData';
//import ThirdpartyIndexService from './ThirdpartyIndexService.service';
import CreateProjectVM from './createProject.vm';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce',
'$state', '$q', '$filter', 'ngDialog', 'user', '$timeout')
export default class ThirdpartyIndexController {
  constructor() {
    this.init();
  }

  //thirdpartyIndexService = new ThirdpartyIndexService();

  init() {
    this.createProjectVM = new CreateProjectVM(this.ngDialog);
  }


}
