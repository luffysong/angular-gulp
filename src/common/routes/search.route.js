import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
const searchView = {
  url: '/search',
  abstract: true,
  template:
  '<div class="search-wrapper"><div ui-view="left"></div><div ui-view="right"></div></div>',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.project),
  },
};

const search = {
  url: '/{id:int}?{city}&{phase}&{industry}&{label}&{isFundingLimit}&{columnId}',
  parent: searchView,
  resolve: {
    loadBundle: getLoadBundle(assets.page.search),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams) {
      return projectService.allData({
        id: $stateParams.id,
      }).catch(() => ({}));
    },
  },
  views: {
    left: {
      templateUrl: '/pages/search/templates/index.html',
      controller: 'SearchIndexController',
      controllerAs: 'searchVm',
    },
    right: {
      templateUrl: '/pages/project/templates/index.html',
      controller: 'ProjectIndexController',
      controllerAs: 'vm',
    },
  },
};

export {
  searchView,
  search,
};
