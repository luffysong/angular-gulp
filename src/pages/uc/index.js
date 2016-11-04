import UcPage from './uc.directive';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@pages.uc', [])
  .directive('ucPage', makeDirective(UcPage));

