
function navigateDirective() {
  return {
    restrict: 'AE',
    link(scope, element, attrs) {
      let arr = element.children('li');
      console.log(arr);
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('navigate', navigateDirective);

export default navigateDirective;
