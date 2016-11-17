import WorkstationListController from './WorkstationList.controller';
import WorkstationListService from './WorkstationList.service';
angular.module('@@pages.workstationList', [])
  .controller('WorkstationListController', WorkstationListController)
  .service('workstationListService', WorkstationListService);
