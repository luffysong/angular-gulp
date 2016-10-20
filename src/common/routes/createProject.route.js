import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
const FINANCE = 'finance';
const CREATE = 'create';
export default {
  url: '/project/create',
  templateUrl: '/pages/createProject/templates/index.html',
  controllerAs: 'vm',
  controller: 'CreateProjectController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.createProject),
    step: () => 1,
    type: () => CREATE,
    financeState: () => undefined,
  },
};

const financeRoute = {
  url: '/project/{id:int}/finance?name',
  templateUrl: '/pages/createProject/templates/index.html',
  controllerAs: 'vm',
  controller: 'CreateProjectController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.createProject),
    type: () => FINANCE,
    step: () => 3,
    financeState: function financeState(loadProjectBundle, createProjectService, $stateParams) {
      return createProjectService.financeState($stateParams.id);
    },
  },
};
export {
  financeRoute,
};
