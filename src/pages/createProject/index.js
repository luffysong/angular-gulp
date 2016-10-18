import CreateProjectController from './createProject.controller';
import CreateProjectService from './createProject.service.js';

angular.module('@@pages.createProject', [])
  .controller('CreateProjectController', CreateProjectController)
  .service('createProjectService', CreateProjectService);
