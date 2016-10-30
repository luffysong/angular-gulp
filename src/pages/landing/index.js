import landingIndexController from './landing.controller';
import landingParentController from './landing.parent.controller';
import landingIndexService from './landing.service';
import filterCalDirective from '../list/filterCal.directive';
import dateFilter from '../list/dateFilter.filter';

angular.module('@@pages.landing', [])
  .controller('landingIndexController', landingIndexController)
  .controller('landingParentController', landingParentController)
  .service('landingIndexService', landingIndexService)
  .directive('filterCal', filterCalDirective)
  .filter('dateFilter', dateFilter);

