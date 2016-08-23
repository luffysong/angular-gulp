import home from './home.route';


function configRoute($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider.state('home', home);
}

angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router'])
  .config(configRoute);
