
function filterCalDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      ngIf: '=ngIf'
    },
    link(scope, element) {
      $timeout(() => {
        if(element.height() > 32) {
          /*element.height(32);*/
          element.parents('.filter-col').addClass('overflow');
        }
      },500);
    },
  };
}
angular
  .module('@@pages.list', [])
  .directive('filterCal', filterCalDirective);

export default filterCalDirective;
