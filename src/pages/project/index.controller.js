@Inject('$stateParams', 'projectService')
export default class ProjectIndexController {
  constructor() {
    this.init();
  }

  init() {
    this.loadCompanyBaseInfo();
  }

  loadCompanyBaseInfo() {
    this.projectService.get({
      id: this.$stateParams.id,
    }).then((data) => {
      console.log(data);
    });
  }
}
