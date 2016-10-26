function split(condition) {
  if (!condition) {
    return [];
  }
  return condition.split(',');
}
@Inject('$stateParams')
export default class SearchIndexController {
  constructor() {
    this.init();
  }

  init() {
    const $stateParams = this.$stateParams;
    this.cities = split($stateParams.city);
    this.labels = split($stateParams.label);
    this.industries = split($stateParams.industry);
    this.phases = split($stateParams.phase);
    this.isFunding = $stateParams.isFundingLimit;
    this.cloumnId = $stateParams.id;
  }


}
