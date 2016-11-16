import WorkstationCompareController from './WorkstationCompare.controller';
import WorkstationCompareService from './WorkstationCompare.service';
angular.module('@@pages.workstationCompare', [])
  .controller('WorkstationCompareController', WorkstationCompareController)
  .service('workstationCompareService', WorkstationCompareService);
