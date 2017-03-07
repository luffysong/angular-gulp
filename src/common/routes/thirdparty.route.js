import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const thirdpartyIndex = {
  url: '/thirdparty/{id}',
  templateUrl: '/pages/thirdparty/templates/index.html',
  controllerAs: 'vm',
  controller: 'ThirdpartyIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.thirdparty),
  },
};

export {
  thirdpartyIndex,
};
