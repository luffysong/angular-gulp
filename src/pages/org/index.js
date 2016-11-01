import OrgController from './Org.controller.js';
import OrgService from './Org.service.js';
import krScrollClick from '../project/krScrollClick.directive.js';
angular.module('@@pages.org', [])
  .controller('OrgController', OrgController)
  .service('orgService', OrgService)
  .directive('krScrollClick', krScrollClick);
