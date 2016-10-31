import followIndexController from './follow.controller';
import followParentController from './follow.parent.controller';
import followIndexService from './follow.service';
import filterColDirective from '../follow/filterCol.directive';
import filterCalDirective from '../list/filterCal.directive';
import dateFilter from '../list/dateFilter.filter';

angular.module('@@pages.follow', [])
  .controller('followIndexController', followIndexController)
  .controller('followParentController', followParentController)
  .service('followIndexService', followIndexService)
  .directive('filterCol', filterColDirective)
  .directive('filterCal', filterCalDirective)
  .filter('dateFilter', dateFilter);

