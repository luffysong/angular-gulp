import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const listView = {
  url: '/list',
  templateUrl: '/pages/list/templates/index.html',
  controllerAs: 'parentVm',
  controller: 'listParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.list),
  }
};

const list = {
  url: '/detail?{city}&{phase}&{industry}&{label}&{isFundingLimit}&{open}',
  templateUrl: '/pages/list/templates/result.html',
  controllerAs: 'vm',
  controller: 'listIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.list),
  }
};


export {
  listView,
  list
};
