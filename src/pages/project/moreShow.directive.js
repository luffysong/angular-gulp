
function moreShowDirective($timeout, $rootScope) {
  return {
    restrict: 'AE',
    scope: {
      text: '=',
    },
    templateUrl: '/pages/project/templates/financeInfo.html',
    link(scope, element) {
      const more = $('<div class="more" >查看更多</div>');
      scope.funds = scope.text;
      $timeout(() => {
        const height = element.height();
        if (height > 150) {
          element.parent().parent().append(more);
        } else {
          return;
        }
      }, 100);
      more.click(function moreClick() {
        more.css('display', 'none');
        element.parent().css('height', 'auto');
      });
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('moreShow', moreShowDirective);
export default moreShowDirective;
