import investorValidateController from './investorValidate.controller';
import CreateProjectService from './createProject.service.js';

angular.module('@@pages.investorValidate', [])
  .controller('investorValidateController', investorValidateController)
  .service('createProjectService', CreateProjectService);
