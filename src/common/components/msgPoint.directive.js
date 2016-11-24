
function msgPointDirective(user) {
  return {
    restrict: 'AE',
    link(scope, element) {
      function getMsg() {
        user.getMsg({
          endpoint: 'WEB'
        }).then(data => {
          if(data.data.hasNewMsg) {
            element.css('opacity',1);
          } else {
            element.css('opacity',0);
          }
        });
      }

      getMsg();

      /*随机时长10-30秒*/
      var delay = (Math.random() * 20 + 10)*1000;
      scope.timer = window.setInterval(() => {
        if(!$('body').find(element).length){
          window.clearInterval(scope.timer);
          return;
        }
        getMsg();
      },delay);

      scope.$on('$destroy',() => {
        window.clearInterval(scope.timer);
      });
    }
  };
}

msgPointDirective.$inject = ['user'];
export default msgPointDirective;
