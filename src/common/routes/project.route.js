import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

export default {
  url: '/project/{id:int}',
  templateUrl: '/pages/project/templates/index.html',
  controllerAs: 'vm',
  controller: 'ProjectIndexController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.project),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams, resolveData) {
      return projectService.allData({
        id: $stateParams.id,
      }).then(data => {
        console.log(data);
        resolveData.projectData = data;
      });
    },
  },
};

const editProject = {
  url: '/edit',
  views: {
    NULL: {
      template: '',
      controllerAs: 'editProjectVM',
      controller: 'EditProjectController',
    },
  },
};

export {
  editProject,
};
