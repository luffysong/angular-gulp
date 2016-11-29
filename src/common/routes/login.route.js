import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const loginView = {
  url: '/login?{okUrl}',
  templateUrl: '/pages/login/templates/index.html',
  controllerAs: 'vm',
  controller: 'loginIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.login),
  }
};

const validateView = {
  url: '/validate',
  templateUrl: '/pages/login/templates/validate.html',
  controllerAs: 'vm',
  controller: 'loginIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.login),
  }
};

export {
  loginView,
  validateView
};
