
function labelCalDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, element) {
      function calHeight() {
        $timeout(() => {
          if (element.height() > 30) {
            element.parent('.outside-container').removeClass('normal');
          } else {
            element.parent('.outside-container').addClass('normal');
          }
        });
      }
      calHeight();
    },
  };
}

labelCalDirective.$inject = ['$timeout'];
export default labelCalDirective;
