import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const labelView = {
  url: '/label',
  templateUrl: '/pages/label/templates/index.html',
  controllerAs: 'parentVm',
  controller: 'labelParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.label),
  }
};

const label = {
  url: '/{labelId}?{city}&{phase}&{isFundingLimit}&{open}',
  templateUrl: '/pages/label/templates/result.html',
  controllerAs: 'vm',
  controller: 'labelIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.label),
  }
};


export {
  labelView,
  label
};
