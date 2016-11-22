import WorkstationCompareController from './WorkstationCompare.controller';
import WorkstationCompareService from './WorkstationCompare.service';
import nameFormat from './nameFormat.filter';
angular.module('@@pages.workstationCompare', [])
  .controller('WorkstationCompareController', WorkstationCompareController)
  .service('workstationCompareService', WorkstationCompareService)
  .filter('nameFormat',nameFormat);
