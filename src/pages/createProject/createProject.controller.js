@Inject('$sce', 'FINANCE_NEED')
export default class CreateProjectController {

  autocompleteOptions = {
    suggest: this.suggest.bind(this),
    full_match: angular.noop,
  };

  financeNeed = this.FINANCE_NEED.UNKNOWN;

  template = `
    <div>
      <img src='' />
      <div class="suggest-project-text">
        <p><span>36氪</span><span>电子商务</span></p>
        <p class="brief">为创业者提供更好的服务</p>
      </div>
    </div>
  `
  suggest() {
    return [
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky',
        obj: { name: 'skyname' },
      },
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky2',
        obj: { name: 'skyname' },
      },
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky3',
        obj: { name: 'skyname' },
      },
    ];
  }

}
