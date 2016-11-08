import labelIndexController from './label.controller';
import labelParentController from './label.parent.controller';
import labelIndexService from './label.service';

angular.module('@@pages.label', [])
  .controller('labelIndexController', labelIndexController)
  .controller('labelParentController', labelParentController)
  .service('labelIndexService', labelIndexService)
  .value('THROTTLE_MILLISECONDS', 300);

