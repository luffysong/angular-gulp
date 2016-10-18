import listIndexController from './list.controller';
import listIndexService from './list.service';

angular.module('@@pages.list', [])
  .controller('listIndexController', listIndexController)
  .service('listIndexService', listIndexService);

