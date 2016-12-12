
function textOverflowDirective() {
  return {
    restrict: 'AE',
    scope: {
      text: '=',
    },
    link(scope, element, attr) {
      const expandText = attr.expandText || '查看更多';
      const collapseText = attr.collapseText || '收起';
      const more = $(`<a class="toggle underline" href="javascript:;"><span class="open">
        ${expandText}</a>`);
      element.text(scope.text);
      element.append(more);
      const moreBtn = element.find('.open');
      function createDots() {
        element.dotdotdot({
          wrap: 'letter',
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
            moreBtn.html(collapseText);
            destroyDots();
          } else {
            element.find('.open').html(expandText);
            createDots();
          }
        });
    },
  };
}

export default textOverflowDirective;
