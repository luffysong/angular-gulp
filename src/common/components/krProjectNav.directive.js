import API from '../base/API.js';

@Inject('$state', '$rootScope')
class ProjectNavController {
  columnApi = new API('/column/:id');

  constructor() {
    this.init();
  }

  init() {
    this.setExpand();
    this.loadColumns();
  }

  setExpand() {
    this.$rootScope.$on('$stateChangeSuccess', (e, toState) => {
      if (toState.name === 'list.result' || toState.name === 'follow.result') {
        this.expand = true;
      } else {
        this.expand = false;
      }
    });
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
    ><span       class="icon-open-icon kr-icon">
    </span>
  </a>
  <ul class="column">
    <li ng-class="{active: item.id+'' === root.toParams.columnId+''}"
    ui-sref-opts="{inherit: false, reload: true}"
     ui-sref="list.result({columnId:item.id})"
      ng-repeat="item in projectNavVm.list" ng-click="projectNavVm.go(item.id,$event)">
    {{item.name}}</li>
  </ul>`,
};
