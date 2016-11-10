import investorInfoController from './investorInfo.controller';
import investorInfoService from './investorInfo.service';
import dateFilter from './dateFilter.filter';
import briefFilter from './briefFilter.filter';
import textOverflowDirective from './textOverflow.directive';
import krScrollClick from '../project/krScrollClick.directive.js';

angular.module('@@pages.investorInfo', [])
  .controller('investorInfoController', investorInfoController)
  .service('investorInfoService', investorInfoService)
  .filter('dateFilter', dateFilter)
  .filter('briefFilter', briefFilter)
  .directive('krScrollClick', krScrollClick)
  .directive('textOverflow', textOverflowDirective);
