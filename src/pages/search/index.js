import SearchIndexController from './index.controller';
import krColumn3Directive from './krColumn.directive.js';

angular.module('@pages.search', [])
  .controller('SearchIndexController', SearchIndexController)
  .directive('krColumn3', krColumn3Directive);

