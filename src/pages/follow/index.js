import followIndexController from './follow.controller';
import followParentController from './follow.parent.controller';
import followIndexService from './follow.service';
import filterCalDirective from '../list/filterCal.directive';
import dateFilter from '../list/dateFilter.filter';

angular.module('@@pages.follow', [])
  .controller('followIndexController', followIndexController)
  .controller('followParentController', followParentController)
  .service('followIndexService', followIndexService)
  .directive('filterCal', filterCalDirective)
  .filter('dateFilter', dateFilter);

