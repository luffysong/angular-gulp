import krData from 'krData';
@Inject('$stateParams', '$window', '$scope', '$rootScope')
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
    this.activeLabel = '综合';
    this.watchOutVm();
  }

  isFollow() {
    return this.$rootScope.root.toState.name === 'follow.result';
  }

  watchOutVm() {
    this.$scope.$watch('searchVm.columnOptions.context', nv => {
      if (nv) {
        this.outVm = nv;
        this.getActiveLabel();
      }
    });
  }
  openTab() {
    this.showTab = !this.showTab;
  }

  getActiveLabel() {
    if (!this.columnOptions || !this.columnOptions.labels || !this.columnOptions.labels.length) {
      return;
    }
    this.columnOptions.labels.forEach(item => {
      if (item.active) {
        this.activeLabel = item.name;
      }
    });
  }

  closeTab(e) {
    this.getActiveLabel();
    this.showTab = false;
    e.stopPropagation();
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
