import ProjectService from '../project/project.service';

@Inject('$timeout', '$window', '$stateParams', '$state', '$scope', '$q', 'user')
export default class failIndexController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {


  }


}

