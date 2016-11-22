var krSlide = {};

@Inject('$rootScope', '$scope')
class SlidePanelController {

  constructor() {
    this.show = false;
    this.$scope.$on('$locationChangeStart', () => {
      this.hideModal();
    });
    krSlide[this.$scope.key] = this;
  }

  watch() {
  }

  showModal() {
    for(var i in krSlide) {
      krSlide[i].show = false;
    }
    this.show = true;
    $('html').addClass('overflow-hidden');
  }

  hideModal() {
    this.show = false;
    $('html').removeClass('overflow-hidden');
  }

  trigger(e,type) {
    if (this.$scope.disabled) {
      return;
    }
    if (e) {
      e.preventDefault();
    }
    !this.show ? this.showModal() : this.hideModal();
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
    key: '@key'
  },
  template: `
    <div>
      <div class="title" ng-transclude="trigger" ng-click="vm.trigger($event)">点我显示</div>
      <div class="kr-slide-panel" ng-class="vm.show?'show':''">
        <div class="bg" ng-click="vm.trigger($event)"></div>
        <div class="panel-body">
          <a class="close icon-dialogClose" ng-click="vm.trigger($event)"></a>
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
