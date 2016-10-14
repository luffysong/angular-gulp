import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

export default {
  url: '/project/create?id&type',
  templateUrl: '/pages/createProject/templates/index.html',
  controllerAs: 'vm',
  controller: 'CreateProjectController',
  resolve: {
    loadProjectBundle: getLoadBundle(assets.page.createProject),
  },
};
