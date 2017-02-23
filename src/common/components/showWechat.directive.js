/* @ngInject */
function showWechatDirective() {
  return {
    restrict: 'AE',
    link(scope, elem, attrs) {
      elem.hover(function () {
        $('.wechat-code').show();
        $('.triangle').show();
      },function (){
        $('.wechat-code').hide();
        $('.triangle').hide();
      });
    }
  };
}

export default showWechatDirective;
