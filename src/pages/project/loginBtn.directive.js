function loginBtnDirective(projectService, $rootScope) {
  return {
    restrict: 'AE',
    link(scope, element) {
      element.click(function loginClick() {
        $rootScope.root.user.ensureLogin();
      });
    },
  };
}
loginBtnDirective.$inject = ['projectService', '$rootScope'];
export default loginBtnDirective;
