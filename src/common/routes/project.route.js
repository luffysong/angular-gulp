import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

export default {
  url: '/project/:id',
  templateUrl: '/pages/project/templates/index.html',
  controllerAs: 'vm',
  controller: 'ProjectIndexController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.project),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams) {
      return projectService.allData({
        id: $stateParams.id,
      });
    },
  },
};
