
function filterCalDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element) {
      $timeout(() => {
        if (element.height() > 32) {
          element.parents('.filter-col').addClass('overflow');
        }
      });
    },
  };
}
filterCalDirective.$inject = ['$timeout'];
export default filterCalDirective;
