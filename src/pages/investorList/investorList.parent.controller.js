import krData from 'krData';
import InvestorService from '../investorList/investorList.service';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('$timeout', '$window', '$stateParams', '$state', '$scope')
export default class investorListParentController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  investorService = new InvestorService();
  projectService = new ProjectService();

  init() {
    this.params = {

    };
    /* 筛选器展开*/
    this.open = {
      filter: false,
      sideBar: false,
    };

    this.$scope.company = {};

    this.itemList = [
      {
        name: 'label',
        key: 'value',
      }, {
        name: 'phase',
        key: 'value',
      }, {
        name: 'city',
        key: 'value',
      },
    ];
    this.data = {};
    this.$scope.$on('get-change', (e, d) => {
      this.params = {};
      angular.extend(this.params, d);
      const params = Object.assign(this.paramsFilter(this.params));
      this.investorService.getList(params).then(data => {
        this.$scope.$broadcast('get-list', data);
        this.totalCount = data.pageData.totalCount;
        this.data.label = data.label;
        this.handleActive();
        this.updateData(data);
      });
    });

    this.$scope.$on('open-sideBar', (e, d) => {
      this.columnOptions = d;
      this.open.sideBar = true;
    });
    this.getFilterData();
    this.getPhase();
    this.getCity();
  }

  /* 过滤不限条件*/
  paramsFilter(target) {
    const o = Object.assign({}, target);
    Object.keys(o).forEach((item) => {
      if (o[item] === 'unlimited') {
        delete o[item];
      }
    });
    return o;
  }

  /* 通过接口返回数据更新筛选器数字*/
  updateData(d) {
    angular.forEach(this.itemList, (item) => {
      if (!d[item.name].length) return;
      angular.forEach(d[item.name], (obj) => {
        angular.forEach(this.data[item.name], (c) => {
          if ((c[item.key] && c[item.key] === obj[item.key]) || obj.name === c.name || (obj.name === '不限' && (c.name === '不限' || c.desc === '不限'))) {
            c.cnt = obj.cnt;
          }
        });
      });
    });
  }

  /* 根据路由参数处理激活*/
  handleActive() {
    this.dataInit();
    angular.forEach(this.params, (val, key) => {
      if (val && String(val).split(',').length > 1) {
        angular.forEach(String(val).split(','), (a) => {
          angular.forEach(this.data[key], (item, index) => {
            if (item.value + '' === a + '' || item.id + '' === a + '') {
              item.active = true;
            }
          });
        });
      } else {
        angular.forEach(this.data[key], (item, index) => {
          if (item.value + '' === val + '' || item.id + '' === val + '') {
            item.active = true;
          }
        });
      }
    });
  }

  /* 筛选器选择行业*/
  selectIndustry(index, type) {
    /* 筛选器选择不限*/
    if (this.data[type][index].name === '不限' || this.data[type][index].desc === '不限') {
      this.params[type] = 'unlimited';
      this.go();
      return;
    }
    const attr = 'value';
    if (this.params[type]) {
      if (this.params[type].split(',').indexOf(String(this.data[type][index][attr])) < 0) {
        const arr = this.params[type].split(',');
        if (arr.indexOf('unlimited') >= 0) { arr.splice(arr.indexOf('unlimited'), 1); }
        arr.push(this.data[type][index][attr]);
        this.params[type] = arr.join(',');
      }
    } else {
      this.params[type] = this.data[type][index][attr];
    }
    this.go();
  }

  /* 筛选器展开*/
  spreadMore(type) {
    this.open[type] = !this.open[type];
  }

  /* 取消选择行业*/
  clearIndustry(id, type) {
    const arr = this.params[type].split(',');
    arr.splice(arr.indexOf(id.toString()), 1);
    this.params[type] = arr.join(',');
    /* this.params[type] = null;*/
    this.go();
  }

  /* state跳转*/
  go() {
    this.$state.go('investorList.result', this.params);
  }

  /* 增加默认数据*/
  addItem(obj,type) {
    const c = {
      active: false,
      id: 0,
      value: 'unlimited',
      desc: '不限'
    };
    if(type === 'city'){
      c.name = '不限';
    } else {
      c.desc = '不限';
    }
    obj.unshift(c);
    return obj;
  }

  /* 数据active全部初始化*/
  dataInit() {
    Object.keys(this.data).forEach((item) => {
      angular.forEach(this.data[item], (obj) => {
        obj.active = false;
      });
      if(!this.params[item] || this.params[item] === 'unlimited') {
        this.data[item][0].active = true;
      }
    });
  }

  /*获取轮次静态数据*/
  getPhase() {
    this.data.phase = this.addItem(this.$scope.root.COMPANY_SEARCH_PHASE_META,'phase');
  }

  getCity() {
    this.projectService.getArea(0)
    .then(data => {
      var city = this.addItem(data,'city');
      city.forEach((item) => {
        if(item.id !==0){
          item.value = item.id;
        }
      });
      this.data.city = city;
    });
  }

  // /*获取静态行业数据*/
  getFilterData() {
    this.investorService.getList().then(data => {
      this.data.label = data.label;
      this.data['label'][0].active = true;
      this.data['phase'][0].active = true;
      this.data['city'][0].active = true;
      this.totalCount = data.pageData.totalCount;
    });
  }


}

