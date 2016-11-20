import WorkstationIndexController from './WorkstationIndex.controller';
import WorkstationIndexService from './WorkstationIndex.service.js';
import getFocusDirective from './getFocus.directive.js';
import nameFormat from './nameFormat.filter';

angular.module('@@pages.workstationIndex', [])
  .controller('WorkstationIndexController', WorkstationIndexController)
  .service('WorkstationIndexService', WorkstationIndexService)
  .directive('getFocus', getFocusDirective)
  .filter('nameFormat',nameFormat);

