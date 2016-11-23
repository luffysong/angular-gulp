
function msgPointDirective(user) {
  return {
    restrict: 'AE',
    link(scope, element) {
      scope.timer = window.setInterval(() => {
        if(!$('body').find(element).length){
          window.clearInterval(scope.timer);
          return;
        }
        user.getMsg({
          endpoint: 'WEB'
        }).then(data => {
          if(data.data.hasNewMsg) {
            element.css('opacity',1);
          } else {
            element.css('opacity',0);
          }
        });
      },1000);
      scope.$on('$destroy',() => {
        window.clearInterval(scope.timer);
      });
    }
  };
}

msgPointDirective.$inject = ['user'];
export default msgPointDirective;
