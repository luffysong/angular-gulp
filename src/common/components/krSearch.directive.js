import API from '../base/API.js';
import { getService } from '../base/utls.js';
import SearchService from '../services/Search.service.js';
// const KEYS = {
//   UP: 38,
//   DOWN: 40,
//   ENTER: 13,
// };
@Inject('$scope')
class SearchController {

  kw = '';
  searchOut = {};
  historyApi = new API('/search/history');
  constructor() {
    this.loadHistory();
    this.init();
  }

  init() {
    const searchInstance = new SearchService();
    this.autocompleteOptions = searchInstance.getSearchAutoCompleteOptions();
    this.watchKw();
    this.loadHistory();
  }

  searchRecord(kw) {
    this.searchOut.click = true;
    this.historyApi.save(null, {
      kw,
    });
    getService('$state').go('landing.result', { kw, type: 'company' }, { inherit: false });
  }

  loadHistory() {
    this.loadingHistory = true;
    this.historyApi.query()
      .then(list => {
        this.history = list;
        this.loadingHistory = false;
      }).catch(() => {
        this.loadingHistory = false;
      });
  }

  watchKw() {
    this.$scope.$watch('vm.kw', (nv, ov) => {
      if (nv === '' && ov) {
        this.historyIndex = -1;
        this.loadHistory();
      }
    });
  }

  setSearchWord(kw) {
    this.history = [];
    this.kw = kw;
    this.searchOut.setWord = true;
    getService('$state').go('landing.result', { kw, type: 'company' }, { inherit: false });
  }
}

export default {
  restrict: 'AE',
  transclude: {
    body: 'div',
  },
  controllerAs: 'vm',
  template: `
    <div ng-transclude="body"> </div>
  `,
  controller: SearchController,
};
