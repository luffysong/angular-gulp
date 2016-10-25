import labelIndexController from './label.controller';
import labelParentController from './label.parent.controller';
import labelIndexService from './label.service';
import filterCalDirective from './filterCal.directive';
import infiniteScrollDirective from './infiniteScroll.directive';
import dateFilter from './dateFilter.filter';

angular.module('@@pages.label', [])
  .controller('labelIndexController', labelIndexController)
  .controller('labelParentController', labelParentController)
  .service('labelIndexService', labelIndexService)
  .directive('filterCal',filterCalDirective)
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('infiniteScroll',infiniteScrollDirective)
  .filter('dateFilter',dateFilter);

