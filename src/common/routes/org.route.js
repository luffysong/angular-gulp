import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

export default {
  url: '/org/{id:int}',
  templateUrl: '/pages/org/templates/index.html',
  controllerAs: 'vm',
  controller: 'OrgController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.org),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, orgService, $stateParams, resolveData) {
      return orgService.allData({
        id: $stateParams.id,
      }).then(data => (resolveData.orgData = data));
    },
  },
}
