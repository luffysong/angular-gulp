
function filterColDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      'data': "=data"
    },
    link(scope, element) {
      function calHeight() {
        $timeout(() => {
          if (element.height() > 33) {
            element.parent('.search-outside-container').siblings('.col-handle').addClass('overflow');
          }else {
            element.parent('.search-outside-container').siblings('.col-handle').removeClass('overflow');
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

filterColDirective.$inject = ['$timeout'];
export default filterColDirective;
