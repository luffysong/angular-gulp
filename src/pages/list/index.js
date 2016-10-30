import listIndexController from './list.controller';
import listParentController from './list.parent.controller';
import listIndexService from './list.service';
import filterCalDirective from './filterCal.directive';
import dateFilter from './dateFilter.filter';

angular.module('@@pages.list', [])
  .controller('listIndexController', listIndexController)
  .controller('listParentController', listParentController)
  .service('listIndexService', listIndexService)
  .directive('filterCal', filterCalDirective)
  .filter('dateFilter', dateFilter);

