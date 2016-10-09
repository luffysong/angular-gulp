import ProjectIndexController from './index.controller';
import ProjectService from './project.service';
import textMoreDirective from './textMore.directive';
import textOverflowDirective from './textOverflow.directive';
import centerDirective from './center.directive';
import loginBtnDirective from './loginBtn.directive';
angular.module('@@pages.project', [])
  .controller('ProjectIndexController', ProjectIndexController)
  .service('projectService', ProjectService)
  .directive('textOverflow', textOverflowDirective)
  .directive('textMore', textMoreDirective)
  .directive('center', centerDirective)
  .directive('loginBtn', loginBtnDirective);
