import OrgController from './Org.controller.js';
import OrgService from './Org.service.js';
angular.module('@@pages.org', [])
  .controller('OrgController', OrgController)
  .service('orgService', OrgService);
