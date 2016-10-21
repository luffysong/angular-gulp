import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state','$scope')
export default class listParentController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.params = {

    };
    /*筛选器展开*/
    this.open = {
      filter: false
    };

    this.data = {
      address:[]
    };

    this.$scope.$on('get-change',(e,d) => {
      angular.extend(this.params,d);
      /*this.paramsData = d;*/
      this.handleActive();
    });

    this.getCity();

    this.getIndustry();

    this.getTag();

    this.getPhase();

    this.getRequirement();

  }


  /*根据路由参数处理激活*/
  handleActive () {
    this.dataInit();
    angular.forEach(this.params,(val,key) => {
      if(val.split(',').length > 1){
        angular.forEach(val.split(','),(a) => {
          angular.forEach(this.data[key],(item,index) => {
            if(item.value === a || item.id == a) {
              item.active = true;
            }
          });
        });
      }else {
        angular.forEach(this.data[key],(item,index) => {
          if(item.value === val || item.id == val) {
            item.active = true;
          }
        });
      }
    });
  }
  /*筛选器选择行业*/
  selectIndustry (index,type) {
    var attr = type === 'address' ? 'id' : 'value';
    if(this.params[type]){
      if(this.params[type].split(',').indexOf(this.data[type][index][attr]) < 0) {
        var arr = this.params[type].split(',');
        arr.push(this.data[type][index][attr]);
        this.params[type] = arr.join(',');
      }
    }else {
      this.params[type] = this.data[type][index][attr];
    }
    this.go();
  }

  /*筛选器展开*/
  spreadMore (type) {
    this.open[type] = !this.open[type];
  };

  /*取消选择行业*/
  clearIndustry (id,type) {
    var arr = this.params[type].split(',');
    arr.splice(arr.indexOf(id),1);
    this.params[type] = arr.join(',');
    /*this.params[type] = null;*/
    this.go();
  }

  /*state跳转*/
  go () {
    this.$state.go('list.result', this.params);
  }

  /*数据active全部初始化*/
  dataInit () {
    Object.keys(this.data).forEach((item) => {
      angular.forEach(this.data[item],(obj) => {
        obj.active = false;

      });
    });
  };

  /*获取静态城市数据*/
  getCity() {
    this.projectService.getArea(0)
      .then(data => {
        this.data.address = data;
        this.handleActive();
      });

  }

  /*获取静态行业数据*/
  getIndustry() {
    this.data.industry = this.$scope.root.INDUSTRY_META;
  }

  /*获取静态标签数据*/
  getTag() {

  }

  /*获取轮次静态数据*/
  getPhase() {
    this.data.phase = this.$scope.root.FINANCE_PHASE_META;
  }

  /*获取融资需求数据*/
  getRequirement() {
    console.log(this.$scope.root.FINANCE_NEED_META);
    this.data.requirement = this.$scope.root.FINANCE_NEED_META;
  }

}

