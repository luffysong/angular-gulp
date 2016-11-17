
function filterCalDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      'data': "=data",
      'open': '=openFilter'
    },
    link(scope, element) {
      function calHeight() {
        $timeout(() => {
          if (element.height() > 34) {
            element.parents('.filter-col').addClass('overflow');
            if(isShow()) {
              scope.open = true;
            }
          }else {
            element.parents('.filter-col').removeClass('overflow');
          }
        },500);
      }

      function isShow() {
        var child = element.children('li.active');
        return child.eq(child.length-1).offset().top > element.offset().top;
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
