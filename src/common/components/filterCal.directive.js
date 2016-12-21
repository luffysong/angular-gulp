
function filterCalDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      data: '=data',
      open: '=openFilter',
    },
    link(scope, element) {
      function isShow() {
        const child = element.children('li.active');
        return child.eq(child.length - 1).offset().top > element.offset().top;
      }

      function calHeight() {
        $timeout(() => {
          if (element.height() > 28) {
            element.parents('.filter-col').addClass('overflow');
            if (isShow()) {
              scope.open = true;
            }
          } else {
            element.parents('.filter-col').removeClass('overflow');
          }
        }, 500);
      }

      if (scope.data) {
        scope.$watch('data', () => calHeight());
      }

      calHeight();
    },
  };
}
filterCalDirective.$inject = ['$timeout'];
export default filterCalDirective;
