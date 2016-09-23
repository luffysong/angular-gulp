
function navigateDirective($timeout) {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      $timeout(function () {
        const arr = element.parents('ul.navigate').children('li[class!="ng-hide"]');
        if (arr[0] === element.parent()[0]) {
          attrs.$set('offset', '277');
        }
      }, 100);
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('navigate', navigateDirective);
navigateDirective.$inject = ['$timeout'];

export default navigateDirective;
