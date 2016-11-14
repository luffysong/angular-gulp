@Inject('$scope', 'loading')
class krLoadingController {

  constructor() {
    this.$scope.showLoading = this.$scope.loading;
    this.loading.push(this.$scope.krLoading, this);
  }
  show() {
    this.$scope.showLoading = true;
  }

  hide() {
    this.$scope.showLoading = false;
  }
}

export class Loading {
  static cache = {};

  push(name, controller) {
    Loading.cache[name] = controller;
  }

  show(name) {
    if (Loading.cache[name]) {
      Loading.cache[name].show();
    }
  }

  hide() {
    if (Loading.cache[name]) {
      Loading.cache[name].hide();
    }
  }

}
export function krLoadingDirective() {
  return {
    scope: {
      loading: '=',
      krLoading: '@',
    },
    controller: krLoadingController,
    template:
      `<div class="loading-wrap"  ng-show="loading && showLoading"><div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>`,
  };
}
