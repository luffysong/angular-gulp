/* @ngInject */
function calPositionDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, elem, attrs) {
      elem.hover(function () {
        if($(document).height() - elem.offset().top < 272){
          elem.addClass('show-top');
        }else {
          elem.removeClass('show-top');
        }
      });
      }
  };
}

export default calPositionDirective;
