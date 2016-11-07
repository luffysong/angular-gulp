import investorInfoController from './investorInfo.controller';
import investorInfoService from './investorInfo.service';
angular.module('@@pages.investorInfo', [])
  .controller('investorInfoController', investorInfoController)
  .service('investorInfoService', investorInfoService)
