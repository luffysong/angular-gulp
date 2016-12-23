@Inject('$document', '$scope')
class BackTopController {

  scrollHandler = this.scrollHandler.bind(this)

  backTop(e) {
    e.preventDefault();
    let scrollContainer = this.container;
    if (!this.krScrollContainer) {
      scrollContainer = this.$document.find('body');
    }
    scrollContainer.animate({
      scrollTop: 0,
    }, 300);
  }

  scrollHandler() {
    if (this.container.scrollTop() > parseFloat(this.offset || 10) && !this.active) {
      this.backTopLink.classList.add('active');
      this.active = true;
    } else if (this.container.scrollTop() < parseFloat(this.offset || 10) && this.active) {
      this.backTopLink.classList.remove('active');
      this.active = false;
    }
  }
}

function postLink($scope, ele) {
  const vm = $scope.vm;
  vm.backTopLink = $('a', ele)[0];
  if (vm.krScrollContainer) {
    vm.container = $(`#${vm.krScrollContainer}`);
  } else {
    /* eslint-disable */
    vm.container = vm.$document;
    /* eslint-enable */
  }
  vm.container.on('scroll', vm.scrollHandler).triggerHandler('scroll');

  $scope.$on('$destroy', () => {
    $(this.container).off('scroll', vm.scrollHandler);
  });
}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  bindToController: true,
  scope: {
    href: '@?',
    krScrollContainer: '@?',
    offset: '@?',
  },
  link: postLink,
  controller: BackTopController,
  template: `
    <div class="back-top-wrapper">
      <a  href="{{vm.href}}" offset="{{vm.offset}}"
      data-stat-click="backtop"
      ng-click="vm.backTop($event)"
      class="icon-backtop">
      </a>
    </div>
  `,
};
