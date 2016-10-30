import krValid from './krValid.directive.js';
import krSearch from './krSearch.directive.js';
import krProjectNav from './krProjectNav.directive.js';
import infiniteScrollDirective from './infiniteScroll.directive';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .directive('krValid', makeDirective(krValid))
  .directive('krSearch', makeDirective(krSearch))
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('krProjectNav', makeDirective(krProjectNav))
  .directive('infiniteScroll', infiniteScrollDirective);
