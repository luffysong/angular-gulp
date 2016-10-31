import krData from 'krData';
@Inject('$stateParams', '$window', '$scope')
export default class SearchIndexController {
  constructor() {
    this.init();
    this.small = true;
    this.onDestroy();
  }

  company = [];
  p = 1;
  init() {
    this.outVm = this.$scope.searchVm.columnOptions.context;
    this.$scope.outVm = this.outVm;
  }

  login() {
    krData.utls.login();
  }

  open(id) {
    this.columnOptions.companyId = id;
  }

  onDestroy() {
    this.$scope.$on('$destroy', () => {
      this.$window.widen();
      krData.paddingContent();
    });
  }


}
