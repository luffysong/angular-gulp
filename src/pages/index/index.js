import homeController from './index.controller';
import searchEnterDirective from './searchEnter.directive';
import initTopDirective from './initTop.directive';

angular.module('@@pages.home', [])
  .controller('homeController', homeController)
  .directive('searchEnter', searchEnterDirective)
  .directive('initTop', initTopDirective)
  .value('duScrollEasing', 1);

