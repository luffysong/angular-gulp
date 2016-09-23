
function textMoreDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element, attrs) {
      const str = ' <div class="more">查看更多</div>';
      element.parent().append(str);
      $timeout(function () {
        let text = $('#' + attrs.id);
        const open = element.parent().children('.more');
        console.log(text);
        if (text) {
          createDots();
        } else {
          text = $('#' + attrs.id);
        }
        function createDots()
        {
          text.dotdotdot({
            after: 'div.more',
          });
          if (!element.hasClass('is-truncated')) {
            open.css('display', 'none');
          }
        }
        function destroyDots() {
          text.trigger('destroy');
        }
        open.click(function () {
          element.toggleClass('opened');

          if (element.hasClass('opened')) {
            destroyDots();
            open.css('display', 'none');
          } else {
            createDots();
          }
          return false;
        });
      }, 100);
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('textMore', textMoreDirective);
textMoreDirective.$inject = ['$timeout'];

export default textMoreDirective;
