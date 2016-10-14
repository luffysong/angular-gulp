
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
      // element.text(template);
      // console.log(height);
      // if (height > 150) {
        // element.append(more);
      // } else {
      //   return;
      // }
      // element.text(scope.text);
      // element.append(more);
      $timeout(() => {
        console.log(element.height());
      }, 100);
      // if(scope.text){
      //   console.log(scope.text);
      //   element.append(more);
      // }
      function createDots() {
        element.dotdotdot({
          after: 'a.toggle',
        });
      }
      createDots();
      function destroyDots() {
        element.trigger('destroy');
      }

      element.on('click',
        'a.toggle',
        function moreClick() {
          element.toggleClass('opened');

          if (element.hasClass('opened')) {
            destroyDots();
          } else {
            createDots();
          }
          return false;
        });
    },
    // controller($scope) {
    //   $scope.funds = $scope.text;
    // },
  };
}
angular
  .module('@@pages.project', [])
  .directive('moreShow', moreShowDirective);
export default moreShowDirective;
