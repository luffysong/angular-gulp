/* @ngInject */
function labelScrollDirective($timeout, $interval) {
  return {
    restrict: 'AE',
    link(scope, elem) {
      let top = 0;
      let timer;
      let col1;
      let col2;
      $timeout(() => {
        col1 = elem.find('.col1');
        col2 = col1.clone().removeClass('col1').addClass('col2');
        if (col1.height() <= 29) return;
        col2.insertAfter(col1);
        timer = $interval(() => {
          startTimer();
        }, 2000);
      }, 500);

      function startTimer() {
        // 当滚动至col1与col2交界时
        if (col2.height() - elem.scrollTop() <= 0) {
          // elem跳到最顶端
          elem.scrollTop(0);
          top = 29;
        } else {
          top += 29;
        }
        elem.animate({
          scrollTop: top,
        });
      }

      scope.$on('$destroy', () => {
        $interval.cancel(timer);
      });
    },

  };
}

export default labelScrollDirective;
