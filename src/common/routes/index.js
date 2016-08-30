import home from './home.route';


function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', home);
}

angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router'])
  .config(configRoute);
