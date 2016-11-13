function textOverflowDirective() {
  return {
    restrict: 'AE',
    scope: {
      text: '=',
    },
    link(scope, element) {

      if (element[0].className.indexOf('info') !== -1) {
        const more = $('<a class="toggle underline" href="#"><span class="open">查看完整履历 >></a>');

        element.text(scope.text);
        element.append(more);
      } else {
        const more = $('<a class="toggle underline" href="#"><span class="open">查看完整信息 >></a>');

        element.text(scope.text);
        element.append(more);
      }
      function createDots() {
        element.dotdotdot({
          after: 'a.toggle',
        });
      }
      createDots();
      function destroyDots() {
        element.trigger('destroy');
      }

      element.on('click',
        'a.toggle',
        function moreClick() {
          element.toggleClass('opened');

          if (element.hasClass('opened')) {
            destroyDots();
          } else {
            createDots();
          }
          return false;
        });
    },
  };
}

export default textOverflowDirective;
