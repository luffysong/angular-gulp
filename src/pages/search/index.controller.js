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
  }

  open(id) {
    this.columnOptions.companyId = id;
  }

  loadMore() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.companyApi.get({
      p: this.p,
    }).then(data => {
      this.company = this.company.concat(data.pageData.data);
      this.p++;
      this.loading = false;
    });
  }


  onDestroy() {
    this.$scope.$on('$destroy', () => {
      this.$window.widen();
    });
  }


}
