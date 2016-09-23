
function textMoreDirective() {
  return {
    restrict: 'AE',
    scope: {
      text: '=',
    },
    link(scope, element) {
      const more = $('<div class="more">查看更多</div>');
      element.html(scope.text);
      element.parent().append(more);
      function createDots() {
        element.dotdotdot({
          after: 'div.more',
        });
        if (!element.hasClass('is-truncated')) {
          more.css('display', 'none');
        }
      }
      createDots();
      function destroyDots() {
        element.trigger('destroy');
      }
      more.click(function moreClick() {
        element.toggleClass('opened');

        if (element.hasClass('opened')) {
          destroyDots();
          more.css('display', 'none');
        } else {
          createDots();
        }
        return false;
      });
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('textMore', textMoreDirective);

export default textMoreDirective;
