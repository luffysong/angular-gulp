
function moreShowDirective() {
  return {
    restrict: 'AE',
    link(scope, element) {
      const more = $('<div class="more" >查看更多</div>');
      const height = element.height();
      if (height > 150) {
        element.parent().parent().append(more);
      } else {
        return;
      }
      more.click(function showAll() {
        element.parent().css('height', 'auto');
        more.css('display', 'none');
      });
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('moreShow', moreShowDirective);

export default moreShowDirective;
