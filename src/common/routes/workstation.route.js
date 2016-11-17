import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const workstationIndex = {
  url: '/workstation',
  templateUrl: '/pages/workstation/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstation),
  },
};

const workstationPackage = {
  url: '/workstation/:package',
  templateUrl: '/pages/workstationList/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationPackageController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationPackage),
  },
};

const workstationCompare = {
  url: '/workstation/:package/compare',
  templateUrl: '/pages/workstationCompare/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationCompareController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationCompare),
  },
};


export {
  workstationIndex,
  workstationPackage,
  workstationCompare,
};

