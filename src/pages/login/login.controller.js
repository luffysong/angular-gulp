import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q', 'user')
export default class loginIndexController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.okUrl = this.$stateParams.okUrl;
  }

  toLogin(){
    krData.utls.login(this.okUrl);
  }

  toValidate(){
    this.$state.go('investorValidate');
  }

}

