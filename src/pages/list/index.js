import listIndexController from './list.controller';
import listParentController from './list.parent.controller';
import listIndexService from './list.service';

angular.module('@@pages.list', [])
  .controller('listIndexController', listIndexController)
  .controller('listParentController', listParentController)
  .service('listIndexService', listIndexService);

