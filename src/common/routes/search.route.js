import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
const searchView = {
  url: '/search',
  abstract: true,
  template: '<div ui-view="left"></div><div ui-view="right"></div>',
  resolve: {
    loadBundle: getLoadBundle(assets.page.project),
  },
};

const search = {
  url: '/:wd?page',
  parent: searchView,
  resolave: {
    loadBundle: getLoadBundle(assets.page.search),
  },
  views: {
    left: {
      templateUrl: '/pages/search/templates/index.html',
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
