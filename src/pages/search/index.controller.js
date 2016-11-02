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
    this.$scope.$watch('searchVm.columnOptions', nv => {
      if(nv.context) {
        this.outVm = nv.context;
      }
      if (nv.labels && nv.labels.length) {
        nv.labels.forEach(item => {
          if(item.active) {
            console.warn(item);
            this.activeLabel = item.name;
          }
        });
      }
    })

    /*this.$scope.$watch('searchVm.columnOptions.context', nv => {
      if (nv) {
        this.outVm = nv;
      }
    })*/
  }
  openTab() {
    this.showTab = !this.showTab;
  }

  closeTab(e) {
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
