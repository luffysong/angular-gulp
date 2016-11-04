import { getService } from '../base/utls.js';
export default {
  restrict: 'AE',
  link: function krBindHtmlPostLink($scope, ele, attr) {
    const html = $scope.$eval(attr.krBindHtml);
    const $compile = getService('$compile');
    ele.html(html);
    $compile(ele.contents())($scope);
  },
};
