@Inject('$scope', '$stateParams', '$state', '$timeout', '$location')
export default class ListPageController {
  constructor() {
    this.$scope.$on('change-page', (e, d) => {
      this.$timeout(() => {
        this.$location.search('p', d);
      }, 2000);
    });
  }
}
