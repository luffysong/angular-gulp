import API from '../base/API.js';
import { getService } from '../base/utls.js';
import SearchService, { RESULT_TYPE } from '../services/Search.service.js';
const KEYS = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
};
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
    this.onClick = this._onClickRow.bind(this);
    this.watchKw();
    this.loadHistory();
  }

  _onClickRow($event, item) {
    $event.preventDefault();
    const target = $event.target;
    const kw = this.kw;
    this.historyApi.save(null, {
      kw,
    });
    if (target.classList.contains('searchProject')) {
      getService('$state').go('landing.result', { kw, type: 'company' }, { inherit: false });
    } else if (target.classList.contains('searchInvestor')) {
      getService('$state').go('landing.result', { kw, type: 'user' }, { inherit: false });
    } else if (target.classList.contains('searchOrg')) {
      getService('$state').go('landing.result', { kw, type: 'org' }, { inherit: false });
    } else if (target.classList.contains('createProject')) {
      getService('$state').go('createProject');
    } else if (item.obj.type === RESULT_TYPE.COMPANY) {
      getService('$state').go('project', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.ORG) {
      getService('$state').go('org', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.USER) {
      getService('$state').go('investorInfo', { id: item.obj.id });
    }
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

function postLink($scope, $ele) {
  const $input = $('input', $ele[0]);
  const vm = $scope.vm;
  $input[0].addEventListener('keydown', (e) => {
    if ($scope.vm.loadingHistory) {
      return;
    }
    if (e.keyCode === KEYS.DOWN) {
      if ($scope.vm.kw === '') {
        vm.historyIndex = ++vm.historyIndex % $scope.vm.history.length;
        e.stopImmediatePropagation();
      }
      $scope.$digest();
    } else if (e.keyCode === KEYS.UP) {
      if (vm.historyIndex < 1) {
        vm.historyIndex = vm.history.length - 1;
      } else {
        vm.historyIndex = --vm.historyIndex % $scope.vm.history.length;
      }
      $scope.$digest();
      if ($scope.vm.kw === '') {
        e.stopImmediatePropagation();
      }
    } else if (e.keyCode === KEYS.ENTER) {
      if (vm.historyIndex > -1) {
        vm.setSearchWord(vm.history[vm.historyIndex]);
      }
    }
  }, false);
  $input[0].addEventListener('focus', () => {
    vm.historyIndex = -1;
  }, false);
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
  link: postLink,
};
