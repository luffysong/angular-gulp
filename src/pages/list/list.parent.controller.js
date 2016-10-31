import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state','$scope', 'user')
export default class listParentController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.isInvestor = this.user.isInvestor();
    this.params = {

    };
    /*筛选器展开*/
    this.open = {
      filter: false,
      sideBar: false
    };

    this.$scope.company = {};



    /*this.itemList = ['industry','phase','city'];*/

    this.itemList = [
      {
        name: 'industry',
        key: 'value'
      },{
        name: 'phase',
        key: 'value'
      },{
        name: 'city',
        key: 'id'
      },{
        name: 'isFundingLimit',
        key: 'id'
      }
    ];

    this.data = {
      city:[],
      isFundingLimit: [
        {
          "id": 'unlimited',
          "name": "不限"
        },{
          "id": 1,
          "name": "融资中"
        }
      ]
    };

    this.$scope.$on('get-change',(e,d) => {
      this.params = {};
      angular.extend(this.params,d);
      var params = Object.assign({columnId:this.params.columnId || 0},this.paramsFilter(this.params));
      this.projectService.getColumn(params).then(data => {
        this.$scope.$broadcast('get-list',data.pageData);
        this.data.label = data.label;
        this.handleActive();
        this.updateData(data);
      });

    });

    this.$scope.$on('open-sideBar',(e,d) => {
      this.columnOptions = d;
      this.open.sideBar = true;
    });


    this.getCity();

    this.getIndustry();

    this.getLabel();

    this.getPhase();

    //this.getisFundingLimit();

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
    Object.keys(this.data).forEach(item => {
      if(item !== 'label') {
        angular.forEach(this.data[item],obj => {
          obj.cnt = 0;
        });
      }
    });
    angular.forEach(this.itemList,(item) => {
      /*筛选条件特殊处理*/
      if(item.name === 'isFundingLimit'){
        angular.forEach(d.funding,(c,index) => {
          if(index <= 1){
            this.data[item.name][index].cnt = c.cnt;
          }
        })
        return;
      }
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
    var attr = type === 'city' || type === 'isFundingLimit' || type === 'label' ? 'id' : 'value';
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
    arr.splice(arr.indexOf(id),1);
    this.params[type] = arr.join(',');
    /*this.params[type] = null;*/
    this.go();
  }

  /*state跳转*/
  go () {
    this.$state.go('list.result', this.params);
  }

  /*增加默认数据*/
  addItem(obj,type) {
    if(!obj || !obj.concat)return;
    var temp = obj.concat();
    var c = {
      active: false,
      id: 0,
      value: 'unlimited'
    };
    if( type === 'city'){
      c.name = '不限';
    } else {
      c.desc = '不限';
    }
    temp.unshift(c);
    return temp;
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
        this.data.city = this.addItem(data,'city');
        this.handleActive();
      });

  }

  /*获取静态行业数据*/
  getIndustry() {
    this.data.industry = this.addItem(this.$scope.root.INDUSTRY_META);
  }

  /*获取静态标签数据*/
  getLabel() {

  }

  /*获取轮次静态数据*/
  getPhase() {
    this.data.phase = this.addItem(this.$scope.root.COMPANY_SEARCH_PHASE_META);
  }

  /*获取融资需求数据*/
  /*getisFundingLimit() {
    this.data.isFundingLimit = this.addItem(this.$scope.root.FINANCE_NEED_META);
  }*/



}

