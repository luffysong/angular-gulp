import homeController from './index.controller';
import searchEnterDirective from './searchEnter.directive';

angular.module('@@pages.home', [])
  .controller('homeController', homeController)
  .directive('searchEnter', searchEnterDirective)
  .value('duScrollEasing', 1);

