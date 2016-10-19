import ProjectIndexController from './index.controller';
import ProjectService from './project.service';
import textMoreDirective from './textMore.directive';
import textOverflowDirective from './textOverflow.directive';
import centerDirective from './center.directive';
import loginBtnDirective from './loginBtn.directive';
import moreShowDirective from './moreShow.directive';
import EditProjectController from './EditProject.controller';
import krScrollClick from './krScrollClick.directive.js';
angular.module('@@pages.project', [])
  .controller('ProjectIndexController', ProjectIndexController)
  .controller('EditProjectController', EditProjectController)
  .service('projectService', ProjectService)
  .directive('textOverflow', textOverflowDirective)
  .directive('textMore', textMoreDirective)
  .directive('center', centerDirective)
  .directive('loginBtn', loginBtnDirective)
  .directive('krScrollClick', krScrollClick)
  .directive('moreShow', moreShowDirective);
