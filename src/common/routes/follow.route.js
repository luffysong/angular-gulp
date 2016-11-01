import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const followView = {
  url: '/follow',
  templateUrl: '/pages/follow/templates/index.html',
  controllerAs: 'parentVm',
  controller: 'followParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.follow),
    loadSearchBundle: getLoadBundle(assets.page.search),
    loadProjectBundle: getLoadBundle(assets.page.project),
  }
};

const follow = {
  url: '/detail?{city}&{phase}&{industry}&{label}&{isFundingLimit}&{open}&{labelId}&{columnId}',
  templateUrl: '/pages/follow/templates/result.html',
  controllerAs: 'vm',
  controller: 'followIndexController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.follow),
  }
};


export {
  followView,
  follow
};
