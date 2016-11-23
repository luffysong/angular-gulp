import investorListIndexController from './investorList.controller';
import investorListParentController from './investorList.parent.controller';
import introFormat from './introFormat.filter';
import investorListService from './investorList.service.js';

angular.module('@@pages.investorList', [])
  .controller('investorListIndexController', investorListIndexController)
  .controller('investorListParentController', investorListParentController)
  .filter('introFormat',introFormat)
  .service('investorListService', investorListService);
