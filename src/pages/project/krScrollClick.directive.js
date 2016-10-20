/* eslint-disable angular/on-watch */
/* @ngInject */
export default function krScrollClick($rootScope, $timeout) {
  $rootScope.$on('duScrollspy:becameActive', function becameActive($event, $element) {
    const root = $rootScope.root;
    const hash = $element.prop('hash');
    if (hash) {
      root.hash = hash.replace('#', '');
    }
    if (root.activeClickEle && root.clickHash !== root.hash) {
      root.activeClickEle.removeClass('active');
    }
  });

  return {
    link: function postLink($scope, ele, attr) {
      ele.click(() => {
        $timeout(() => {
          $('.active').removeClass('active');
          if (!ele.hasClass('active')) {
            ele.addClass('active');
          }
          $scope.root.hash = attr.href.replace('#', '');
          $scope.root.clickHash = $scope.root.hash;
          $scope.root.activeClickEle = ele;
        }, 400);
      });
    },
  };
}
