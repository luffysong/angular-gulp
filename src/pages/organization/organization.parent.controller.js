import krData from 'krData';
import OrganizationService from '../organization/organization.service';


@Inject('$timeout', '$window','$stateParams','$state','$scope','$location')
export default class organizationParentController {

  constructor() {
    this.init();
  }

  organizationService = new OrganizationService();

  init() {
    this.closeAnnouncement = window.closeAnnouncement;

    this.params = {

    };
    this.currentPage = this.$location.search().page || 1;

    /*筛选器展开*/
    this.open = {
      filter: false,
      sideBar: false
    };

    this.$scope.company = {};

    this.itemList = [
      {
        name: 'industry',
        key: 'value'
      },{
        name: 'phase',
        key: 'value'
      }
    ];

    this.data = {};
    this.$scope.$on('get-change',(e,d) => {
      this.params = {};
      angular.extend(this.params,d);
      this.params['page'] = this.currentPage;
      var params = Object.assign(this.paramsFilter(this.params));
      this.organizationService.getList(params).then(data => {
        this.$scope.$broadcast('get-list',data.org);
        this.data = data.filter;
        this.handleActive();
        this.updateData(data.filter);
      });
    });

    this.$scope.$on('open-sideBar',(e,d) => {
      this.columnOptions = d;
      this.open.sideBar = true;
    });
    this.getIndustry();
    this.getPhase();
  }

  /*过滤不限条件*/
  paramsFilter(target) {
    var o = Object.assign({},target);
    Object.keys(o).forEach((item) => {
      if(o[item] === 'unlimited'){
        delete o[item];
      }
    });
    return o;
  }

  /*通过接口返回数据更新筛选器数字*/
  updateData(d) {
    angular.forEach(this.itemList,(item) => {
      if(!d[item.name].length)return;
      angular.forEach(d[item.name],(obj) => {
        angular.forEach(this.data[item.name],(c) => {
          if((c[item.key] && c[item.key] === obj[item.key]) || (obj.name === '不限' && (c.name === '不限' || c.desc === '不限'))){
            c.cnt = obj.cnt;
          }
        });
      })
    })
  }

  /*根据路由参数处理激活*/
  handleActive () {
    this.dataInit();
    angular.forEach(this.params,(val,key) => {
      if(val && String(val).split(',').length > 1){
        angular.forEach(String(val).split(','),(a) => {
          angular.forEach(this.data[key],(item,index) => {
            if(item.value+'' === a+'' || item.id+'' === a+'') {
              item.active = true;
            }
          });
        });
      }else {
        angular.forEach(this.data[key],(item,index) => {
          if(item.value+'' === val+'' || item.id+'' === val+'') {
            item.active = true;
          }
        });
      }
    });
  }

  /*筛选器选择行业*/
  selectIndustry (index,type) {
    /*筛选器选择不限*/
    if(this.data[type][index].name === '不限' || this.data[type][index].desc === '不限') {
      this.params[type] = 'unlimited';
      this.go();
      return;
    }
    var attr = 'value';
    if(this.params[type]){
      if(this.params[type].split(',').indexOf(String(this.data[type][index][attr])) < 0) {
        var arr = this.params[type].split(',');
        if(arr.indexOf('unlimited') >= 0){arr.splice(arr.indexOf('unlimited'),1)};
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
    arr.splice(arr.indexOf(id.toString()),1);
    this.params[type] = arr.join(',');
    /*this.params[type] = null;*/
    this.go();
  }

  /*state跳转*/
  go () {
    this.$state.go('organization.result', this.params);
  }

  /*增加默认数据*/
  addItem(obj) {
    var c = {
      active: false,
      id: 0,
      value: 'unlimited'
    };
    obj.unshift(c);
    return obj;
  }

  /*数据active全部初始化*/
  dataInit () {
    Object.keys(this.data).forEach((item) => {
      angular.forEach(this.data[item],(obj) => {
        obj.active = false;
      });
      if(!this.params[item] || this.params[item] === 'unlimited') {
        this.data[item][0].active = true;
      }
    });
  };

  /*获取静态行业数据*/
  getIndustry() {
    // this.data.industry = this.addItem(this.$scope.root.INDUSTRY_META);
    this.organizationService.getList().then(data => {
        this.data = data.filter;
        this.data['industry'][0].active = true;
        this.data['phase'][0].active = true;
      });
  }

  /*获取轮次静态数据*/
  getPhase() {
    const financePhase = [];
    angular.copy(this.$scope.root.FINANCE_PHASE_META,financePhase);
    this.data.phase = this.addItem(financePhase);
  }

}

