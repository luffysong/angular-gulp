import API from '../base/API.js';
const ICON_CLASS = {
  1: 'icon-best',
  3: 'icon-new',
  4: 'icon-rich',
  5: 'icon-financing',
};
@Inject('$state', '$rootScope')
class ProjectNavController {
  columnApi = new API('/column/:id');
  ICON_CLASS = ICON_CLASS;
  constructor() {
    this.init();
  }

  init() {
    this.loadColumns();
  }

  getName(id) {
    return ICON_CLASS[id].replace('icon-', '');
  }

  loadColumns() {
    this.columnApi.query()
      .then(list => {
        this.list = list;
      });
  }
}
export default {
  restrict: 'AE',
  controller: ProjectNavController,
  controllerAs: 'projectNavVm',
  template: `
  <dt><span>推荐</span></dt>
  <dd ng-repeat="item in projectNavVm.list"
    ng-if="projectNavVm.ICON_CLASS[item.id]"
    ng-class="{active: item.id+'' === root.toParams.columnId+''}" >
    <a data-stat-click="{{::projectNavVm.getName(item.id)}}"
      href="javascript:;" ui-sref-opts="{reload: true, inherit: false}"
      ui-sref="list.result({columnId:item.id,sortField: 'ADD_COLUMN_LABEL'})">
      <span class="kr-icon {{::projectNavVm.ICON_CLASS[item.id]}}"></span
      ><span class="kr-tags">{{item.name}}</span>
    </a>
  </dd>
  `,
};
