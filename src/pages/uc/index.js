import UcPage from './uc.directive';
import UcMessage from './uc.message.directive';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@pages.uc', [])
  .directive('ucPage', makeDirective(UcPage))
  .directive('ucMessage', makeDirective(UcMessage));

