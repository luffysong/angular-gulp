
function filterCalDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      'data': "=data"
    },
    link(scope, element) {
      function calHeight() {
        $timeout(() => {
          if (element.height() > 34) {
            element.parents('.filter-col').addClass('overflow');
          }else {
            element.parents('.filter-col').removeClass('overflow');
          }
        });
      }

      if(scope.data) {
        scope.$watch('data',from => {
          calHeight();
        });
      }
      calHeight();
    }
  };
}
filterCalDirective.$inject = ['$timeout'];
export default filterCalDirective;
