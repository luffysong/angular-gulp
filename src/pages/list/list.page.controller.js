@Inject('$scope', '$stateParams', '$state')
export default class ListPageController {
  constructor() {
    this.$scope.$on('change-page', (e, d) => {
      console.log(1111111);
      this.$timeout(() => {
        this.$location.search('p', d);
      }, 2000);
    });
  }
}
