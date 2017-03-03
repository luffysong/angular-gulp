import ThirdpartyIndexController from './ThirdpartyIndexController.controller';
import ThirdpartyIndexService from './ThirdpartyIndexService.service';
import CreateProjectService from '../createProject/createProject.service.js';
angular.module('@@pages.thirdparty', [])
  .controller('ThirdpartyIndexController', ThirdpartyIndexController)
  .service('createProjectService', CreateProjectService)
  .service('thirdpartyIndexService', ThirdpartyIndexService);
