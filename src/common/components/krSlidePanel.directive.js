import API from '../base/API.js';
import { getService } from '../base/utls.js';

@Inject('$rootScope')
class SlidePanelController {

  constructor() {
    this.show=false;
  }

  trigger(e){
    e.preventDefault();
    console.log('clicked!');
    this.show = !this.show;
  }

}
export default {
  restrict: 'AE',
  controllerAs: 'vm',
  transclude: {
    'body': 'paneBody',
    'trigger': 'paneTrigger'
  },
  template: `
    <div>
      <div class="title" ng-transclude="trigger" ng-click="vm.trigger($event)">点我显示</div>
      <div class="kr-slide-panel" ng-class="vm.show?'show':''" ng-transclude="body">
      </div>
    </div>  
  `,
  link:(scope, ele, attrs) => {
    console.log(ele.find('.kr-slide-panel'));
    ele.find('.kr-slide-panel').appendTo('body');
  },
  controller: SlidePanelController,
};
