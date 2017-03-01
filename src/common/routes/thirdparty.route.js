import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const thirdpartyIndex = {
  url: '/thirdparty',
  templateUrl: '/pages/thirdparty/template/index.html',
  controllerAs: 'vm',
  controller: 'ThirdpartyIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.thirdparty),
  },
};

export {
  thirdpartyIndex,
};
