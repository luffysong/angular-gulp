import followIndexController from './follow.controller';
import followParentController from './follow.parent.controller';
import followIndexService from './follow.service';
import filterColDirective from '../follow/filterCol.directive';

angular.module('@@pages.follow', [])
  .controller('followIndexController', followIndexController)
  .controller('followParentController', followParentController)
  .service('followIndexService', followIndexService)
  .directive('filterCol', filterColDirective);

