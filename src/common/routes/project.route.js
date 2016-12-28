import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
import phantom from '../base/phantom';

export default {
  url: '/project/{id:int}',
  templateUrl: '/pages/project/templates/index.html',
  controllerAs: 'vm',
  controller: 'ProjectIndexController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.project),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams, resolveData,
      projectRun, seoService) {
      projectRun.run();
      const seoPromise = seoService.projectSeo($stateParams.id);
      const projectPromise = projectService.allData({
        id: $stateParams.id,
      }).then(data => (resolveData.projectData = data));

      phantom.renderAsync([seoPromise, projectPromise]);
      return projectPromise;
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
