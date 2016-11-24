import { getService } from '../base/utls.js';
export default {
  restrict: 'AE',
  link: function krBindHtmlPostLink($scope, ele, attr) {
    function handleHtml() {
      let html = $scope.$eval(attr.krBindHtml);
      if (angular.isString(html)) {
        html = getService('$sce').getTrustedHtml(html);
        ele.html(html);
      } else {
        const $compile = getService('$compile');
        ele.html(getService('$sce').getTrustedHtml(html));
        $compile(ele.contents())($scope);
      }
    }

    if (attr.isWatch) {
      $scope.$watch(attr.krBindHtml, (v) => {
        if (v) {
          handleHtml();
        }
      });
    } else {
      handleHtml();
    }
  },
};
