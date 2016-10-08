
function navigateDirective(projectService) {
  return {
    restrict: 'AE',
    link(scope, element) {
      element.click(function (e) {
        e.preventDefault();
        projectService.getUser().then((data) => {
          return;
        }, (data) => {
          setTimeout(function () {
            console.log('/user/login?from=' + encodeURIComponent(location.href), location.href);
          }, 300);
        });
      });
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('navigate', navigateDirective);

export default navigateDirective;
