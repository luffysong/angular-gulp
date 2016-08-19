import assets from '../assets/script';
export default {
  url: '',
  templateUrl: 'pages/home/templates/index.html',
  controllerAs: 'vm',
  controller: 'IndexController',
  resolve: {
    loadBundle: function loadBundle($ocLazyLoad) {
      'ngInject';
      return $ocLazyLoad.load(assets.page.home);
    },
  },
};
