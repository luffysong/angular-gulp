import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const loginView = {
  url: '/login',
  templateUrl: '/pages/login/templates/index.html',
  controllerAs: 'parentVm',
  controller: 'loginIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.login),
  }
};

export {
  loginView
};
