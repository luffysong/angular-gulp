import krValid from './krValid.directive.js';
import krSearch from './krSearch.directive.js';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .directive('krValid', makeDirective(krValid))
  .directive('krSearch', makeDirective(krSearch));
