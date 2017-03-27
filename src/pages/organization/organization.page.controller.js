@Inject('$scope', '$stateParams', '$state', '$timeout', '$location')
export default class OrganizationPageController {
  constructor() {
    this.$scope.$on('change-page', (e, d) => {
      this.$timeout(() => {
        this.$location.search('page', d);
      }, 2000);
    });
  }
}
