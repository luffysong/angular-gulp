import krBindHtml from './krBindHtml.directive.js';
import krValid from './krValid.directive.js';
import rongTrack from './rongTrack.directive';
import krSearch from './krSearch.directive.js';
import krProjectNav from './krProjectNav.directive.js';
import krSlidePanel from './krSlidePanel.directive.js';
import infiniteScrollDirective from './infiniteScroll.directive';
import calPositionDirective from './calPosition.directive';
import krEleClampChecker from './krEleClampChecker.directive.js';
import filterCalDirective from './filterCal.directive';
import { krLoadingDirective, Loading } from './krLoading.directive.js';
import parallaxDirective from './parallax.directive';
import msgPoint from './msgPoint.directive';
import krBacktop from './krBacktop.directive';
import labelScrollDirective from './labelScroll.directive';
import announcementDirective from './announcement.directive';
import closeAnnouncementDirective from './closeAnnouncement.directive';
import showWechatDirective from './showWechat.directive';
import showTipMessageDirective from './showTipMessage.directive';
function makeDirective(directive) {
  return () => directive;
}
angular.module('@@app.components', [])
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('krValid', makeDirective(krValid))
  .directive('krSearch', makeDirective(krSearch))
  .directive('krProjectNav', makeDirective(krProjectNav))
  .directive('krSlidePanel', makeDirective(krSlidePanel))
  .directive('krBindHtml', makeDirective(krBindHtml))
  .directive('krEleClampChecker', makeDirective(krEleClampChecker))
  .directive('krBacktop', makeDirective(krBacktop))
  .directive('infiniteScroll', infiniteScrollDirective)
  .directive('calPosition', calPositionDirective)
  .directive('krLoading', krLoadingDirective)
  .service('loading', Loading)
  .directive('filterCal', filterCalDirective)
  .directive('msgPoint', msgPoint)
  .directive('krParallax', parallaxDirective)
  .directive('rongTrack', rongTrack)
  .directive('labelScroll', labelScrollDirective)
  .directive('announcement', announcementDirective)
  .directive('closeannouncement', closeAnnouncementDirective)
  .directive('showwechat', showWechatDirective)
  .directive('showtipmessage', showTipMessageDirective);
