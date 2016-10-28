import SearchIndexController from './index.controller';
import krColumn3Directive from './krColumn.directive.js';
import '../list/infiniteScroll.directive.js';

angular.module('@pages.search', [])
  .controller('SearchIndexController', SearchIndexController)
  .value('THROTTLE_MILLISECONDS', 300)
  .directive('krColumn3', krColumn3Directive);

