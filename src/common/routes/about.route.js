import assets from '../assets/script';
export default {
  url: '',
  templateUrl: '/pages/about/templates/index.html',
  controllerAs: 'vm',
  controller: 'AboutController',
  resolve: {
    loadBundle: function loadBundle($ocLazyLoad) {
      'ngInject';
      return $ocLazyLoad.load(assets.page.about);
    },
  },
};
