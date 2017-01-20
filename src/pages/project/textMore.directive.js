
function textMoreDirective() {
  return {
    restrict: 'AE',
    scope: {
      text: '=',
    },
    link(scope, element) {
      const more = $('<div class="get-more">查看更多</div>');
      element.html(scope.text);
      element.parents('.project-light-wrapper').append(more);
      function createDots() {
        element.dotdotdot({
          wrap: 'letter',
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
export default textMoreDirective;
