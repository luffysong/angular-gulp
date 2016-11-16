import WorkstationIndexController from './WorkstationIndex.controller';
import WorkstationIndexService from './WorkstationIndex.service.js';

angular.module('@@pages.workstationIndex', [])
  .controller('WorkstationIndexController', WorkstationIndexController)
  .service('WorkstationIndexService', WorkstationIndexService);
