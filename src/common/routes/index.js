/* eslint-disable angular/on-watch */
import home from './home.route';
import project, { editProject } from './project.route';
import createProject, { financeRoute } from './createProject.route';
import { searchView, search } from './search.route';
import { listView, list } from './list.route';
import { labelView, label } from './label.route';
import {landingView, landing } from './landing.route';

function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', home);
  $stateProvider.state('project', project);
  $stateProvider.state('project.edit', editProject);
  $stateProvider.state('search', searchView);
  $stateProvider.state('search.result', search);
  $stateProvider.state('createProject', createProject);
  /*项目列表页*/
  $stateProvider.state('list', listView);
  $stateProvider.state('list.result', list);
  /*标签聚合页*/
  $stateProvider.state('label', labelView);
  $stateProvider.state('label.result', label);
  /*搜索落地页*/
  /*项目列表页*/
  $stateProvider.state('landing', landingView);
  $stateProvider.state('landing.result', landing);
  $urlRouterProvider.when('^/list', '^/list/result');
  $stateProvider.state('financeRoute', financeRoute);
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
