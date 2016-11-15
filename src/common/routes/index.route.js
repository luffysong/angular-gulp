import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '^/',
  templateUrl: '/pages/index/templates/index.html',
  controllerAs: 'vm',
  controller: 'homeController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.index)
  },
};
