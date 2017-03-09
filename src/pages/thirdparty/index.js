import ThirdpartyIndexController from './ThirdpartyIndexController.controller';
import ThirdpartyIndexService from './ThirdpartyIndexService.service';
import textOverflowDirective from '../project/textOverflow.directive';
import CreateProjectService from '../createProject/createProject.service.js';
angular.module('@@pages.thirdparty', [])
  .controller('ThirdpartyIndexController', ThirdpartyIndexController)
  .directive('textOverflow', textOverflowDirective)
  .service('createProjectService', CreateProjectService)
  .service('thirdpartyIndexService', ThirdpartyIndexService);
