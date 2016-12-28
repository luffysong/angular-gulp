import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
import phantom from '../base/phantom';
export default {
  url: '/org/{id:int}',
  templateUrl: '/pages/org/templates/index.html',
  controllerAs: 'vm',
  controller: 'OrgController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.org),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, orgService, $stateParams, resolveData,
      seoService) {
      const seoPromise = seoService.orgSeo($stateParams.id);
      const orgPromise = orgService.allData({
        id: $stateParams.id,
      }).then(data => (resolveData.orgData = data));
      phantom.renderAsync([seoPromise, orgPromise]);
      return orgPromise;
    },
  },
};
