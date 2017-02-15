import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const commercialIndex = {
  url: '/commercial/{id:int}?name',
  templateUrl: '/pages/commercial/templates/index.html',
  controllerAs: 'vm',
  controller: 'commercialIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.commercial),
  },
};

export {
  commercialIndex,
};
