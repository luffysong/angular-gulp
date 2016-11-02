import OrgController from './Org.controller.js';
import OrgService from './Org.service.js';
import textOverflowDirective from './textOverflow.directive.js';
import krScrollClick from '../project/krScrollClick.directive.js';
angular.module('@@pages.org', [])
  .controller('OrgController', OrgController)
  .service('orgService', OrgService)
  .directive('krScrollClick', krScrollClick)
  .directive('textOverflow', textOverflowDirective);
