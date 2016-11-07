import krBindHtml from './krBindHtml.directive.js';
import krValid from './krValid.directive.js';
import krSearch from './krSearch.directive.js';
import krProjectNav from './krProjectNav.directive.js';
import krSlidePanel from './krSlidePanel.directive.js';
import infiniteScrollDirective from './infiniteScroll.directive';
import calPositionDirective from './calPosition.directive';
import krEleClampChecker from './krEleClampChecker.directive.js';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .directive('krValid', makeDirective(krValid))
  .directive('krSearch', makeDirective(krSearch))
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('krProjectNav', makeDirective(krProjectNav))
  .directive('krSlidePanel', makeDirective(krSlidePanel))
  .directive('infiniteScroll', infiniteScrollDirective)
  .directive('krBindHtml', makeDirective(krBindHtml))
  .directive('krEleClampChecker', makeDirective(krEleClampChecker))
  .directive('calPosition', calPositionDirective);
