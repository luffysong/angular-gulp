import ProjectIndexController from './index.controller';
import ProjectService from './project.service';
import textMoreDirective from './textMore.directive';
import textOverflowDirective from './textOverflow.directive';
import centerDirective from './center.directive';
import loginBtnDirective from './loginBtn.directive';
import moreShowDirective from './moreShow.directive';
import EditProjectController from './EditProject.controller';
import krScrollClick from './krScrollClick.directive.js';
import introFormat from './introFormat.filter';
import ProductDataService from './productData.service';
import enterFormat from './enterFormat.filter';
import ProjectRun from './run.service';
angular.module('@@pages.project', [])
  .controller('ProjectIndexController', ProjectIndexController)
  .controller('EditProjectController', EditProjectController)
  .service('projectService', ProjectService)
  .service('projectRun', ProjectRun)
  .directive('textOverflow', textOverflowDirective)
  .directive('textMore', textMoreDirective)
  .directive('center', centerDirective)
  .directive('loginBtn', loginBtnDirective)
  .directive('krScrollClick', krScrollClick)
  .filter('introFormat', introFormat)
  .directive('moreShow', moreShowDirective)
  .service('productDataService', ProductDataService)
  .filter('enterFormat', enterFormat)
  .directive('moreShow', moreShowDirective);
