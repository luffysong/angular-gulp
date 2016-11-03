
function filterColDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element) {
      $timeout(() => {
        if(element.height() > 33) {
          element.height(33);
          element.siblings('.col-handle').addClass('overflow');
        }
      },0);
    },
  };
}
angular
  .module('@@pages.list', [])
  .directive('filterCol', filterColDirective);

export default filterColDirective;