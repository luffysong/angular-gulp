import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '/project/:id',
  templateUrl: '/pages/project/templates/index.html',
  controllerAs: 'vm',
  controller: 'ProjectIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.project),
  },
};
