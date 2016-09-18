import home from './home.route';
import project from './project.route';
import { searchView, search } from './search.route';

function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', home);
  $stateProvider.state('project', project);
  $stateProvider.state('search', searchView);
  $stateProvider.state('search.result', search);
}

angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router'])
  .config(configRoute);
