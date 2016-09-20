import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
const searchView = {
  url: '/search',
  abstract: true,
  template:
  '<div class="search-wrapper"><div ui-view="left"></div><div ui-view="right"></div></div>',
  resolve: {
    loadBundle: getLoadBundle(assets.page.project),
  },
};

const search = {
  url: '/:wd?page',
  parent: searchView,
  resolve: {
    loadBundle: getLoadBundle(assets.page.search),
    projectData: () => undefined,
  },
  views: {
    left: {
      templateUrl: '/pages/search/templates/index.html',
      controller: 'SearchIndexController',
    },
    right: {
      templateUrl: '/pages/project/templates/index.html',
      controller: 'ProjectIndexController',
    },
  },
};

export {
  searchView,
  search,
};
