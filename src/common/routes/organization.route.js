import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const organizationView = {
  url: '/org',
  templateUrl: '/pages/organization/templates/index.html',
  controllerAs: 'organizationVm',
  controller: 'organizationParentController',
  abstract: true,
  resolve: {
    loadBundle: getLoadBundle(assets.page.organization),
    loadSeo: /* @ngInject */
      function loadSeo($stateParams, seoService) {
        seoService.orgListSeo();
      },
  },
};

const organization = {
  url: '/list?{phase}&{industry}&{open}',
  templateUrl: '/pages/organization/templates/result.html',
  controllerAs: 'vm',
  controller: 'organizationIndexController',
};

const organizationPage = {
  url: '&{page}',
  views: {
    NULL: {
      template: '',
      controllerAs: 'pageVM',
      controller: 'organizationPageController',
    },
  },
};


export {
  organizationView,
  organization,
  organizationPage
};

