
function initTopDirective() {
  return {
    restrict: 'AE',
    scope: {
      initTop: '=initTop',
    },
    link(scope, element) {
      scope.$watch('initTop', (f) => {
        if (f) {
          element.scrollTop(0);
        }
      });
    },
  };
}
export default initTopDirective;
