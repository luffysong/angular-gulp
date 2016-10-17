export default {
  restrict: 'AE',
  require: 'ngModel',
  link: function postLink($scope, ele, attr, ngModelCtrl) {
    ngModelCtrl.$setValidity(attr.name, true);
  },
};
