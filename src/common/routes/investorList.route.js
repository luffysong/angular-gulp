import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const investorListView = {
  url: '/investor',
  templateUrl: '/pages/investorList/templates/index.html',
  controllerAs: 'investorListVm',
  controller: 'investorListParentController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.investorList),
    loadSeo: /* @ngInject */
      function loadSeo($stateParams, seoService) {
        seoService.investorListSeo();
      },
  },
};

const investorList = {
  url: '/list?{phase}&{label}&{city}&{open}&{type}',
  templateUrl: '/pages/investorList/templates/result.html',
  parent: investorListView,
  controllerAs: 'vm',
  controller: 'investorListIndexController',
};

export {
  investorListView,
  investorList,
};
