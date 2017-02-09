/* eslint-disable angular/on-watch */
import home from './home.route';
import project, { editProject } from './project.route';
import createProject, { financeRoute } from './createProject.route';
import { search } from './search.route';
import { listView, list } from './list.route';
import { organizationView, organization } from './organization.route';
import { investmentView, investment } from './investment.route';
import { investorInfoView, investorInfoEdit } from './investorInfo.route';
import { investorListView, investorList } from './investorList.route';
import { labelView, label } from './label.route';
import { landingView, landing } from './landing.route';
import { followView, follow } from './follow.route';
import org from './org.route.js';
import investorValidate from './investorValidate.route';
import { failView, fail } from './fail.route';
import { workstationIndex, workstationList, workstationCompare } from './workstation.route';
import indexView from './index.route';
import { loginView, validateView } from './login.route';
import announcement from './announcement.route';


function configRoute($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/fail/404');
  $stateProvider.state('home', home);
  $stateProvider.state('project', project);
  $stateProvider.state('project.edit', editProject);
  $stateProvider.state('search', search);
  $stateProvider.state('createProject', createProject);
  /* 项目列表页*/
  $stateProvider.state('list', listView);
  $stateProvider.state('list.result', list);
  /* 标签聚合页*/
  $stateProvider.state('label', labelView);
  $stateProvider.state('label.result', label);
  /* 搜索落地页*/
  $stateProvider.state('landing', landingView);
  $stateProvider.state('landing.result', landing);
  /* 我的关注*/
  $stateProvider.state('follow', followView);
  $stateProvider.state('follow.result', follow);


  $urlRouterProvider.when('^/list', '^/list/result');
  $stateProvider.state('financeRoute', financeRoute);
  /* 投资机构列表页*/
  $stateProvider.state('organization', organizationView);
  $stateProvider.state('organization.result', organization);
  /* 投资案例列表页*/
  $stateProvider.state('investment', investmentView);
  $stateProvider.state('investment.result', investment);

  /* 机构页 */
  $stateProvider.state('org', org);
  /* 投资人认证*/
  $stateProvider.state('investorValidate', investorValidate);

  /* 投资人详情页*/
  $stateProvider.state('investorInfo', investorInfoView);
  $stateProvider.state('investorInfo.edit', investorInfoEdit);
  /* 投资人筛选页*/
  $stateProvider.state('investorList', investorListView);
  $stateProvider.state('investorList.result', investorList);

  // 工作台
  $stateProvider.state('workstationCompare', workstationCompare);
  $stateProvider.state('workstationList', workstationList);
  $stateProvider.state('workstationIndex', workstationIndex);

  //公告页
  $stateProvider.state('announcement', announcement);

  /* 404页面*/
  $stateProvider.state('fail', failView);
  $stateProvider.state('fail.404', fail);

  /* 登录引导页 */
  $stateProvider.state('login', loginView);
  $stateProvider.state('validate', validateView);

  /* 首页*/
  $stateProvider.state('index', indexView);
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
