import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '/list',
  templateUrl: '/pages/list/templates/index.html',
  controllerAs: 'vm',
  controller: 'listIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.list),
  },
};
