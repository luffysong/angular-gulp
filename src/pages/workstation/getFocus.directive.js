
function getFocusDirective() {
  return {
    restrict: 'AE',
    link(scope, element) {
      scope.$watch("isFocus",function(newValue,oldValue, scope) {
        if(newValue && scope.newCollection){
          setTimeout(function(){
            element[0].focus();
          },100);
        }
        if(newValue && scope.isEdit){
          element.each(function (i){
            if(parseInt(this.id) === parseInt(scope.editId)){
              const item = this;
              setTimeout(function(){
                item.focus();
              },100);
            }
          });
        }
      }, true);
    }
  }
}
angular
  .module('@@pages.workstationIndex', [])
  .directive('getFocus', getFocusDirective)

export default getFocusDirective;
