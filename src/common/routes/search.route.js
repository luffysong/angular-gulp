import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const search = {
  url: '/search/{id:int}?{city}&{phase}&{industry}&{label}&{isFundingLimit}&{columnId}',
  templateUrl: '/pages/search/templates/index.html',
  controller: 'SearchIndexController',
  controllerAs: 'searchVm',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.project),
    loadBundle: getLoadBundle(assets.page.search),
    projectData: /* @ngInject */
    function loadProjectData(loadProjectBundle, projectService, $stateParams, resolveData) {
      return projectService.allData({
        id: $stateParams.id,
      }).catch(() => ({})).then(data => (resolveData.projectData = data));
    },
  },
};

export {
  search,
};
