import followIndexController from './follow.controller';
import followParentController from './follow.parent.controller';
import followIndexService from './follow.service';
import filterColDirective from '../follow/filterCol.directive';
import labelCalDirective from '../follow/labelCal.directive';

angular.module('@@pages.follow', [])
  .controller('followIndexController', followIndexController)
  .controller('followParentController', followParentController)
  .service('followIndexService', followIndexService)
  .directive('filterCol', filterColDirective)
  .directive('labelCal', labelCalDirective);

