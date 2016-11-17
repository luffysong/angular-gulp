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

const workstationList = {
  url: '/workstation/{id:int}?name',
  templateUrl: '/pages/workstationList/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationListController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationList),
  },
};

const workstationCompare = {
  url: '/workstation/compare?cids',
  templateUrl: '/pages/workstationCompare/templates/index.html',
  controllerAs: 'vm',
  controller: 'WorkstationCompareController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.workstationCompare),
  },
};


export {
  workstationIndex,
  workstationList,
  workstationCompare,
};

