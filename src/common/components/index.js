import krValid from './krValid.directive.js';
import krSearch from './krSearch.directive.js';
import krProjectNav from './krProjectNav.directive.js';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .directive('krValid', makeDirective(krValid))
  .directive('krSearch', makeDirective(krSearch))
  .directive('krProjectNav', makeDirective(krProjectNav));
