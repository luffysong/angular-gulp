
function textOverflowDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element, attrs) {
      const str = ' <a class="toggle" href="#"><span class="open">查看更多</a>';
      element.append(str);


      $timeout(function () {
        let text = $('#' + attrs.id);
        console.log(text);
        if (text) {
          createDots();
        } else {
          text = $('#' + attrs.id);
        }
        function createDots()
        {
          console.log('text', text);
          text.dotdotdot({
            after: 'a.toggle',
          });
        }
        function destroyDots() {
          text.trigger('destroy');
        }

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
