import ProjectIndexController from './index.controller';
import ProjectService from './project.service';
angular.module('@@pages.project', [])
  .controller('ProjectIndexController', ProjectIndexController)
  .service('projectService', ProjectService);

