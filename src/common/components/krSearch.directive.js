import API from '../base/API.js';
import SearchService from '../services/Search.service.js';
// const KEYS = {
//   UP: 38,
//   DOWN: 40,
//   ENTER: 13,
// };
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
