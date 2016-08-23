import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '/home',
  templateUrl: '/pages/home/templates/index.html',
  controllerAs: 'vm',
  controller: 'IndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.home),
  },
};
