import home from './home.route';
import project from './project.route';

function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', home);
  $stateProvider.state('project', project);
}

angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router'])
  .config(configRoute);
