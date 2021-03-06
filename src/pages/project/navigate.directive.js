
function loginBtnDirective(projectService) {
  return {
    restrict: 'AE',
    link(scope, element) {
      element.click(function (e) {
        e.preventDefault();
        projectService.getUser().then((data) => {
          return;
        }, (data) => {
          setTimeout(function () {
            location.href = 'https://passport.36kr.com/pages/?ok_url=' + encodeURIComponent(location.href);
          }, 300);
        });
      });
    },
  };
}
angular
  .module('@@pages.project', [])
  .directive('loginBtn', loginBtnDirective);

export default loginBtnDirective;
