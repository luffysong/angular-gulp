import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '^/',
  templateUrl: '/pages/index/templates/bannerIndex.html',
  controllerAs: 'vm',
  controller: 'homeController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.index),
  },
};
