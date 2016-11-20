@Inject('$rootScope', '$scope')
class SlidePanelController {

  constructor() {
    this.show = false;
    this.$scope.$on('$locationChangeStart', () => {
      this.show = false;
      $('html').removeClass('overflow-hidden');
    });
  }

  watch() {
  }

  trigger(e) {
    if (this.$scope.disabled) {
      return;
    }
    if (e) {
      e.preventDefault();
    }
    this.show = !this.show;
    if (this.show) {
      $('html').addClass('overflow-hidden');
    } else {
      $('html').removeClass('overflow-hidden');
    }
  }

}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  transclude: {
    body: '?paneBody',
    trigger: 'paneTrigger',
  },
  scope: {
    disabled: '=disabled',
  },
  template: `
    <div>
      <div class="title" ng-transclude="trigger" ng-click="vm.trigger($event)">点我显示</div>
      <div class="kr-slide-panel" ng-class="vm.show?'show':''">
        <div class="bg" ng-click="vm.trigger($event)"></div>
        <div class="panel-body">
          <div class="handle-container">
            <a class="close icon-dialogClose" ng-click="vm.trigger($event)"></a>
          </div>
          <div class="panel-content" ng-transclude="body"></div>
        </div>
      </div>
    </div>
  `,
  link: (scope, ele) => {
    ele.find('.kr-slide-panel').appendTo('body');
  },
  controller: SlidePanelController,
};
