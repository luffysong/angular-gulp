import listIndexController from './list.controller';
import listParentController from './list.parent.controller';
import ListPageController from './list.page.controller';
import listIndexService from './list.service';

angular.module('@@pages.list', [])
  .controller('listIndexController', listIndexController)
  .controller('listParentController', listParentController)
  .controller('ListPageController', ListPageController)
  .service('listIndexService', listIndexService);

