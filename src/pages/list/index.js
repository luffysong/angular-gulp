import listIndexController from './list.controller';
import listParentController from './list.parent.controller';
import listIndexService from './list.service';
import filterCalDirective from './filterCal.directive';
import infiniteScrollDirective from './infiniteScroll.directive';

angular.module('@@pages.list', [])
  .controller('listIndexController', listIndexController)
  .controller('listParentController', listParentController)
  .service('listIndexService', listIndexService)
  .directive('filterCal',filterCalDirective)
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('infiniteScroll',infiniteScrollDirective)

