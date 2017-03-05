import OrgController from './Org.controller.js';
import OrgService from './Org.service.js';
import ThirdpartyIndexService from '../thirdparty/ThirdpartyIndexService.service';
import textOverflowDirective from '../project/textOverflow.directive.js';
import krScrollClick from '../project/krScrollClick.directive.js';
angular.module('@@pages.org', [])
  .controller('OrgController', OrgController)
  .service('orgService', OrgService)
  .service('thirdpartyIndexService', ThirdpartyIndexService)
  .directive('krScrollClick', krScrollClick)
  .directive('textOverflow', textOverflowDirective);
