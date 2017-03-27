@Inject('$scope', '$stateParams', '$state', '$timeout', '$location')
export default class InvestorPageController {
  constructor() {
    this.$scope.$on('change-page', (e, d) => {
      this.$timeout(() => {
        this.$location.search('p', d);
      }, 2000);
    });
  }
}
