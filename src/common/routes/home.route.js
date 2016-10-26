import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
export default {
  url: '/home/{id:int}',
  templateUrl: '/pages/home/templates/index.html',
  controllerAs: 'vm',
  controller: 'IndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.home),
    loadProjectBundle: getLoadBundle(assets.page.project),
    loadSearchBundle: getLoadBundle(assets.page.search),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams, resolveData) {
      return projectService.allData({
        id: $stateParams.id,
      }).catch(() => ({})).then(data => (resolveData.projectData = data));
    },
  },
};
