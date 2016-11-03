import investmentIndexController from './investment.controller';
import investmentParentController from './investment.parent.controller';
import introFormat from './introFormat.filter';
import dateFilter from './dateFilter.filter';
import investmentService from './investment.service.js';

angular.module('@@pages.investment', [])
  .controller('investmentIndexController', investmentIndexController)
  .controller('investmentParentController', investmentParentController)
  .filter('introFormat',introFormat)
  .filter('dateFilter',dateFilter)
  .service('investmentService', investmentService);
