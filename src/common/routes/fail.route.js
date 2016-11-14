import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const failView = {
  url: '/fail',
  template: '<div ui-view></div>',
  controllerAs: 'parentVm',
  controller: 'failIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.fail),
  }
};

const fail = {
  url: '/404',
  templateUrl: '/pages/fail/templates/404.html',
  controllerAs: 'vm',
  controller: 'failIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.fail),
  }
};


export {
  failView,
  fail
};
