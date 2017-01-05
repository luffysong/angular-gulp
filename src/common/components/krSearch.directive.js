import API from '../base/API.js';
import { getService } from '../base/utls.js';
import SearchService from '../services/Search.service.js';
@Inject('$scope')
class SearchController {

  kw = '';
  historyApi = new API('/search/history');
  constructor() {
    this.init();
  }

  init() {
    const searchInstance = new SearchService();
    this.autocompleteOptions = searchInstance.getSearchAutoCompleteOptions();
  }

  searchRecord(kw) {
    this.historyApi.save(null, {
      kw,
    });
    getService('$state').go('landing.result', { kw, type: 'company', sortField: 'MATCH_RATE'}, { inherit: false, reload: true });
  }

}

function postLink(scope, element, attrs, ctrl, transclude) {
  transclude(scope, (clone) => {
    element.append(clone);
  });
}
export default {
  restrict: 'AE',
  scope: {

  },
  transclude: true,
  controllerAs: 'vm',
  link: postLink,
  controller: SearchController,
};
