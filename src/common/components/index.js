import krValid from './krValid.directive.js';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .directive('krValid', makeDirective(krValid));
