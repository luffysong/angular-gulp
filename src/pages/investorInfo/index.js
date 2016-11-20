import investorInfoController from './investorInfo.controller';
import EditInvestorController from './investorInfoEdit.controller';
import investorInfoService from './investorInfo.service';
import investDateFilter from './investDateFilter.filter';
import briefFilter from './briefFilter.filter';
import companyNameFormat from './companyNameFormat.filter';
import textOverflowDirective from '../project/textOverflow.directive.js';
import krScrollClick from '../project/krScrollClick.directive.js';

angular.module('@@pages.investorInfo', [])
  .controller('investorInfoController', investorInfoController)
  .controller('EditInvestorController', EditInvestorController)
  .service('investorInfoService', investorInfoService)
  .filter('investDateFilter', investDateFilter)
  .filter('briefFilter', briefFilter)
  .filter('companyNameFormat', companyNameFormat)
  .directive('krScrollClick', krScrollClick)
  .directive('textOverflow', textOverflowDirective);
