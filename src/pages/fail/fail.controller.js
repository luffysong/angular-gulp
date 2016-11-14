import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('followIndexService', '$timeout', '$window','$stateParams','$state','$scope', '$q', 'user', 'ngDialog')
export default class failIndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {



  }



}

