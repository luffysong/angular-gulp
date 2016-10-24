import API from '../base/API.js';
import { getService } from '../base/utls.js';

@Inject('$rootScope')
class SearchController {

  constructor() {
    this.loadHistory();
  }
  loadHistory() {
    const historyAPI = new API('/search/history');
    historyAPI.query()
      .then(list => (this.history = list));
  }

  setSearchWord(kw) {
    this.$rootScope.root.kw = kw;
  }
}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  template: `
    <ul>
      <li>搜索历史</li>
      <li ng-click="vm.setSearchWord(item)" ng-repeat="item in vm.history track by $index">
        {{item}}
      </li>
    </ul>`,
  controller: SearchController,
};
