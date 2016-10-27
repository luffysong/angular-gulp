import API from '../base/API.js';

class ProjectNavController {
  columnApi = new API('/column/:id');

  constructor() {
    this.init();
  }

  init() {
    this.loadColumns();
  }

  loadColumns() {
    this.columnApi.query()
      .then(list => (this.list = list));
  }
}
export default {
  restrict: 'AE',
  controller: ProjectNavController,
  controllerAs: 'projectNavVm',
  template: `
  <a href="">
    <span class="icon-Company kr-icon"></span>
    <span class="kr-tags">创业公司</span>
  </a>
  <ul class="column">
    <li ui-sref="list.result({columnId:item.id})" ng-repeat="item in projectNavVm.list">
    {{item.name}}</li>
  </ul>`,
};
