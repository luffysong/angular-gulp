import { getService } from '../base/utls.js';
export default {
  restrict: 'AE',
  link: function postLink($scope, ele, attr) {
    const config = $scope.$eval(attr.krEleClampChecker) || {};
    getService('$timeout')(() => {
      const $container = angular.element(config.container);
      const height = parseInt($container.css('height'), 10);
      $container.css('height', 'auto');
      if ($container.height() > (config.height || height || 32)) {
        if (config.showClass) {
          ele.addClass(config.showClass);
        } else {
          ele.show();
        }
      }
      $container.css('height', '');
    });
  },
};

