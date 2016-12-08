import API from '../base/API.js';

@Inject('$state', '$rootScope')
class ProjectNavController {
  columnApi = new API('/column/:id');

  constructor() {
    this.init();
  }

  init() {
    this.expandFirst();
    this.loadColumns();
  }

  expandFirst() {
    this.$rootScope.$on('$stateChangeSuccess', (e, toState) => {
      if (toState.name === 'list.result' || toState.name === 'follow.result') {
        this.expand = true;
      } else {
        this.expand = false;
      }
    });
  }

  setExpand(e) {
    e.preventDefault();
    e.stopPropagation();
    /* 其他栏目点击箭头默认跳转全部项目优选,并展开 */
    const name = this.$rootScope.root.toState.name;
    if (name !== 'list.result' && name !== 'follow.result') {
      this.$state.go('list.result', {
        columnId: 1,
      });
    }
    this.expand = !this.expand;
  }

  go(id, e) {
    /* 我的关注*/
    if (parseInt(id, 10) === 2) {
      e.preventDefault();
      this.$state.go('follow.result', {
        columnId: id,
      });
    }
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
  <a ng-click="projectNavVm.expand = !projectNavVm.expand"
    ng-class="{expand: projectNavVm.expand}"
    ui-sref="list.result({columnId: projectNavVm.list[0].id})">
    <span class="icon-Company kr-icon"></span><span class="kr-tags">创业公司</span
    ><span ng-click="projectNavVm.setExpand($event)">
      <span class="icon-open-icon kr-icon"></span>
    </span>
  </a>
  <ul class="column">
    <li ng-class="{active: item.id+'' === root.toParams.columnId+''}"
    ui-sref-opts="{inherit: false}"
     ui-sref="list.result({columnId:item.id})"
      ng-repeat="item in projectNavVm.list" ng-click="projectNavVm.go(item.id,$event)">
    {{item.name}}</li>
  </ul>`,
};
