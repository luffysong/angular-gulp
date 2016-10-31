import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const organizationView = {
  url: '/organization',
  templateUrl: '/pages/organization/templates/index.html',
  controllerAs: 'organizationVm',
  controller: 'organizationParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.organization),
  },
};

const organization = {
  url: '/detail?{phase}&{industry}&{open}&{columnId:int}',
  templateUrl: '/pages/organization/templates/result.html',
  controllerAs: 'vm',
  controller: 'organizationIndexController',
};


export {
  organizationView,
  organization
};

