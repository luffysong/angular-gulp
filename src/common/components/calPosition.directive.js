/* @ngInject */
function calPositionDirective($timeout) {
  return {
    restrict: 'AE',
    link(scope, elem, attrs) {
      elem.hover(function () {
        if($(window).height() - elem.height() - elem[0].getBoundingClientRect().top < 272){
          elem.addClass('show-top');
        }else {
          elem.removeClass('show-top');
        }
      });
      }
  };
}

export default calPositionDirective;
