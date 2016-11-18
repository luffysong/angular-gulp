
function parallaxDirective($timeout) {
  return {
    restrict: 'AE',
    scope: {
      'able': '=unAble'
    },
    link(scope, element) {
      console.log(element);
      var scene = element[0];
      var parallax = new Parallax(scene);
      scope.$watch('able',f => {
        if(f) {
          console.log(parallax.disable());
          parallax.disable();
        }else {
          parallax.enable();
        }
      });
    }
  };
}
parallaxDirective.$inject = ['$timeout'];
export default parallaxDirective;
