
function textOverflowDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element, attrs) {
      const text = $('#' + attrs.id);
      const str = ' <a class="toggle" href="#"><span class="open">查看更多</a>';
      element.append(str);

      function createDots()
        {
        text.dotdotdot({
          after: 'a.toggle',
        });
      }
      function destroyDots() {
        text.trigger('destroy');
      }
      $timeout(function () {
        createDots();
        console.log(element.hasClass('is-truncated'));
        // if (element.hasClass('is-truncated')) {
        //   console.log($('#' + attrs.id+'>a.toggle'));
        //   $('#' + attrs.id+'>a.toggle').css({ 'display': 'none' });
        // }
      }, 100);

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
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('textOverflow', textOverflowDirective);
textOverflowDirective.$inject = ['$timeout'];

export default textOverflowDirective;
