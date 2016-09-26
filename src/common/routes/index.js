/* eslint-disable angular/on-watch */
import home from './home.route';
import project from './project.route';
import createProject from './createProject.route';
import { searchView, search } from './search.route';

function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', home);
  $stateProvider.state('project', project);
  $stateProvider.state('search', searchView);
  $stateProvider.state('search.result', search);
  $stateProvider.state('createProject', createProject);
}

function stateChangeError($rootScope, $log) {
  $rootScope.$on('$stateChangeError', function onStateChangeError(event, toState, toParams,
    fromState,
    fromParams, error) {
    $log.info(error);
  });
}
angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router', '@@app.constants'])
  .config(configRoute)
  .run(stateChangeError);
