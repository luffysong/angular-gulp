/* @ngInject */
function showTipMessage($compile) {
  return {
    restrict: 'AE',
    link(scope, elem, attrs) {
      if(elem[0].type === 'textarea'){
        if(elem.parent().children('.tip-message').children()[0]){
          elem[0].onfocus = function () {
            elem.parent().parent().children()[0].style.bottom="143px";
            elem.parent().parent().children()[0].style.paddingBottom="40px";
            elem.parent().parent().children()[0].style.display="block";
          };
          elem[0].onblur = function () {
            elem.parent().parent().children()[0].style.display="none";
          };
          elem.parent().parent().children().children()[0].onclick = function (){
            elem.parent().parent().children()[0].style.display="none";
          };
        }
      } else {
        console.log(elem.parent().children('.error-tip-message'));
        if(elem.parent().children('.tip-message').children()[0]){
          elem[0].onfocus = function () {
            elem.parent().children()[0].style.display="block";
          };
          elem[0].onblur = function () {
            elem.parent().children()[0].style.display="none";
          };
          elem.parent().children().children()[0].onclick = function (){
            elem.parent().children()[0].style.display="none";
          };
        }
        if(elem.parent().children('.error-tip-message').children()[0]){
          console.log(1111111111);
          elem.parent().children('.error-tip-message').children()[0].onclick = function (){
            elem.parent().children('.error-tip-message')[0].style.display="none";
          };
        }
      }
    }
  };
}

export default showTipMessage;
