import IndexController from './index.controller';
import indexService from './index.service';

angular.module('@@pages.index', [])
  .controller('IndexController', IndexController)
  .service('indexService', indexService);

