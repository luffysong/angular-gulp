
function searchEnterDirective() {
  return {
    restrict: 'AE',
    link(scope, element) {
      element.bind('keyup', (event) => {
        if (event.keyCode === 13) {
          window.krtracker('trackEvent', 'keyup', `home.seach.${element[0].value}.enter`);
        }
        window.krtracker('trackEvent', 'keyup', `home.seach.${element[0].value}`);
      });
    },
  };
}
export default searchEnterDirective;
