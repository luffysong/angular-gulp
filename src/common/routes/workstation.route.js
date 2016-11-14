import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const workstationIndex = {
  url: '/workstation',
  templateUrl: '/pages/workstationIndex/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkStationIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationIndex),
  },
};

const workstationPackage = {
  url: '/workstation/:package',
  templateUrl: '/pages/workstationPackage/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationPackageController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationPackage),
  },
};

const workstationCompare = {
  url: '/workstation/:package',
  templateUrl: '/pages/workstationPackage/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationPackageController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationPackage),
  },
};


export {
  workstationIndex,
  workstationPackage,
  workstationCompare,
};

