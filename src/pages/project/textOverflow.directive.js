
function textOverflowDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element, attrs) {
      const str = ' <a class="toggle" href="#"><span class="open">查看更多</a>';
      element.append(str);


      $timeout(function () {
        const text = $('#' + attrs.id);
        function createDots()
        {
          text.dotdotdot({
            after: 'a.toggle',
          });
        }
        function destroyDots() {
          text.trigger('destroy');
        }
        createDots();
        text.on(
          'click',
          'a.toggle',
          function () {
            element.toggleClass('opened');

            if (element.hasClass('opened')) {
              destroyDots();
            } else {
              createDots();
            }
            return false;
          }
        );
      }, 100);
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('textOverflow', textOverflowDirective);
textOverflowDirective.$inject = ['$timeout'];

export default textOverflowDirective;
