import followIndexController from './follow.controller';
import followParentController from './follow.parent.controller';
import followPageController from './follow.page.controller';
import followIndexService from './follow.service';
import filterColDirective from '../follow/filterCol.directive';
import labelCalDirective from '../follow/labelCal.directive';

angular.module('@@pages.follow', [])
  .controller('followIndexController', followIndexController)
  .controller('followParentController', followParentController)
  .controller('followPageController', followPageController)
  .service('followIndexService', followIndexService)
  .directive('filterCol', filterColDirective)
  .directive('labelCal', labelCalDirective);

