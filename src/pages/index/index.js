import homeController from './index.controller';

angular.module('@@pages.home', [])
  .controller('homeController', homeController)
  .value('duScrollEasing', 1);

