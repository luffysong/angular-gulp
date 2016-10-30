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
  <a ui-sref="list.result({columnId: projectNavVm.list[0].id})">
    <span class="icon-Company kr-icon"></span>
    <span class="kr-tags">创业公司</span>
  </a>
  <ul class="column">
    <li ng-class="{active: item.id === root.toParams.columnId}"
    ui-sref-opts="{reload: true, inherit: false}"
     ui-sref="list.result({columnId:item.id})"
      ng-repeat="item in projectNavVm.list">
    {{item.name}}</li>
  </ul>`,
};
