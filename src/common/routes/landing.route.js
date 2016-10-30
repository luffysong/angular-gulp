import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const landingView = {
  url: '/landing',
  templateUrl: '/pages/landing/templates/index.html',
  controllerAs: 'parentVm',
  controller: 'landingParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.landing),
  }
};

const landing = {
  url: '/detail?{city}&{phase}&{industry}&{label}&{isFundingLimit}&{open}&{type}',
  templateUrl: '/pages/landing/templates/result.html',
  controllerAs: 'vm',
  controller: 'landingIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.landing),
  }
};


export {
  landingView,
  landing
};
