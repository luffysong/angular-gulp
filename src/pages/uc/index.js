import UcPage from './uc.directive';
import UcMessage from './uc.message.directive';
import nameFormat from './nameFormat.filter';
import UcService from './uc.service';

function makeDirective(directive) {
  return () => directive;
}
angular.module('@@pages.uc', [])
  .service('ucService', UcService)
  .directive('ucPage', makeDirective(UcPage))
  .directive('ucMessage', makeDirective(UcMessage))
  .filter('nameFormat', nameFormat);

