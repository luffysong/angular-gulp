
function centerDirective() {
  return {
    restrict: 'AE',
    link(scope, element) {
      const left = $('.project-wrapper').offset().left;
      const margin = `${left}px`;
      const style = { 'margin-left': margin };
      element.parent().css(style);
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('center', centerDirective);

export default centerDirective;
