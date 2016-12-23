import ProjectService from '../project/project.service';

@Inject('listIndexService', '$timeout', '$window', '$stateParams', '$state', '$scope', 'user', '$location')
export default class listParentController {

  constructor() {
    this.init();
  }

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
    this.text = {
      '1': '优选',
      '3': '新品',
      '4': '最新获投',
      '5': '融资中',
    };


    /* this.itemList = ['industry','phase','city'];*/

    this.itemList = [
      {
        name: 'industry',
        key: 'value',
      }, {
        name: 'phase',
        key: 'value',
      }, {
        name: 'city',
        key: 'id',
      }, {
        name: 'isFundingLimit',
        key: 'id',
      },
    ];

    this.data = {
      city: [],
      isFundingLimit: [
        {
          id: 'unlimited',
          name: '不限',
        }, {
          id: 1,
          name: '融资中',
        },
      ],
    };

    this.$scope.$on('get-change', (e, d) => {
      this.params = {};
      angular.extend(this.params, d);
      const params = Object.assign({ columnId: this.params.columnId || 0 },
        this.paramsFilter(this.params));
      this.projectService.getColumn(params).then(data => {
        this.$scope.$broadcast('get-list', data.pageData);
        this.totalCount = data.pageData.totalCount;
        this.data.label = data.label;
        this.data.label[0].value = 'unlimited';
        this.loopLabels(this.data.label);
        this.handleActive();
        this.updateData(data);
      });
    });

    this.$scope.$on('open-sideBar', (e, d) => {
      this.columnOptions = d;
      this.open.sideBar = true;
    });


    this.getCity();

    this.getIndustry();

    this.getLabel();

    this.getPhase();
    // this.getisFundingLimit();
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
    Object.keys(this.data).forEach(item => {
      if (item !== 'label') {
        angular.forEach(this.data[item], obj => {
          obj.cnt = 0;
        });
      }
    });
    angular.forEach(this.itemList, (item) => {
      /* 筛选条件特殊处理*/
      if (item.name === 'isFundingLimit') {
        angular.forEach(d.funding, (c) => {
          angular.forEach(this.data.isFundingLimit, k => {
            if (`${k.name}` === `${c.name}` || `${k.id}` === `${c.id}`) {
              k.cnt = c.cnt;
            }
          });
        });
        return;
      }
      if (!d[item.name].length) return;
      angular.forEach(d[item.name], (obj) => {
        angular.forEach(this.data[item.name], (c) => {
          if ((c[item.key] && c[item.key] === obj[item.key]) ||
            (obj.name === '不限' && (c.name === '不限' || c.desc === '不限'))) {
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
          angular.forEach(this.data[key], (item) => {
            if (`${item.value}` === `${a}` || `${item.id}` === `${a}`) {
              item.active = true;
            }
          });
        });
      } else {
        angular.forEach(this.data[key], (item) => {
          if (item.value === val || String(item.id) === String(val)) {
            item.active = true;
          }
        });
      }
    });
    this.handleLabel();
  }


  /* 筛选器*/
  selectIndustry(index, type) {
    // 行业选择
    if (type === 'industry') {
      this.params.industry = this.data.industry[index].value;
      this.params.label = 'unlimited';
      this.go();
      return;
    }

    /* 筛选器选择不限*/
    if (this.data[type][index].name === '不限' || this.data[type][index].desc === '不限') {
      this.params[type] = 'unlimited';
      this.go();
      return;
    }
    const attr = type === 'city' || type === 'isFundingLimit' || type === 'label' ? 'id' : 'value';
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

    this.$timeout.cancel(this.timer);
    this.go();
  }

  /* 收起筛选器展示已选择的标签 */
  handleLabel() {
    const temp = {
      industry: 'desc',
      label: 'name',
      phase: 'desc',
      city: 'name',
      isFundingLimit: 'name',
    };
    this.filterData = {};
    Object.keys(this.data).forEach(key => {
      angular.forEach(this.data[key], item => {
        if (item.active && item.value !== 'unlimited' && item.id !== 'unlimited') {
          if (this.filterData[key]) {
            this.filterData[key] += `,${item[temp[key]]}`;
          } else {
            this.filterData[key] = item[temp[key]];
          }
        }
      });
    });
  }

  hasIndustry() {
    return this.params.industry && this.params.industry !== 'unlimited';
  }

  hasSubIndustry() {
    if (!this.hasIndustry()) {
      return false;
    }
    return (this.params.columnId && this.open.filter) || !this.params.columnId;
  }

  /* 筛选器展开*/
  spreadMore(type) {
    this.open[type] = !this.open[type];
  }

  /* 取消选择行业*/
  clearIndustry(id, type) {
    const arr = this.params[type].split(',');
    arr.splice(arr.indexOf(`${id}`), 1);
    this.params[type] = arr.join(',');
    /* this.params[type] = null;*/
    this.go();
  }

  /* state跳转*/
  go() {
    this.$state.go('list.result', this.params);
  }

  /* 增加默认数据*/
  addItem(obj, type) {
    if (!obj || !obj.concat) return;
    const temp = obj.concat();
    const c = {
      active: false,
      id: 0,
      value: 'unlimited',
    };
    if (type === 'city') {
      c.name = '不限';
    } else {
      c.desc = '不限';
    }
    temp.unshift(c);
    return temp;
  }

  /* 数据active全部初始化*/
  dataInit() {
    Object.keys(this.data).forEach((item) => {
      angular.forEach(this.data[item], (obj) => {
        obj.active = false;
      });
      if (!this.params[item] && this.data[item].length) {
        this.data[item][0].active = true;
      }
    });
  }

  /* 获取静态城市数据*/
  getCity() {
    this.projectService.getArea(0)
      .then(data => {
        this.data.city = this.addItem(data, 'city');
        this.handleActive();
      });
  }

  /* 获取静态行业数据*/
  getIndustry() {
    this.data.industry = this.addItem(this.$scope.root.LIST_COMPANY_INDUSTRY_META);
  }

  /* 获取静态标签数据*/
  getLabel() {

  }

  /* 获取轮次静态数据*/
  getPhase() {
    this.data.phase = this.addItem(this.$scope.root.COMPANY_SEARCH_PHASE_META);
  }

  /* 融资中、优选、新品列表 未登录用户或已登录的非投资人用户禁用筛选器*/
  getPermission() {
    const columnId = `${this.params.columnId}`;
    this.topTitle = this.text[columnId];
    if (columnId === '0' || columnId === '4' || angular.isUndefined(columnId)) {
      return false;
    } else if (!this.user.isLogin || !this.user.isInvestor()) {
      return true;
    }
  }
  /* 获取融资需求数据*/
  /* getisFundingLimit() {
    this.data.isFundingLimit = this.addItem(this.$scope.root.FINANCE_NEED_META);
  }*/


  orderBySortField(sortField){
    this.params.sortField = sortField;
    if(sortField === 'STOCK_AT'){
        this.isStockAt = true;
        this.isStartDate = false;
    }else if(sortField === 'START_DATE'){
        this.isStockAt = false;
        this.isStartDate = true;
        this.isAddColumnLabel = false;
    }else if(sortField === 'ADD_COLUMN_LABEL'){
        this.isStartDate = false;
        this.isAddColumnLabel = true;
    }
    this.go();
  }


  loopLabels(labels){
    this.labels = [];
    this.label = {};
    var industryVal = this.$location.search().industry;
    if(!industryVal){
      return
    }
    var labelIds = this.$location.search().label.split(',');
    angular.forEach(this.data.industry, (obj) => {
      if(obj.value === industryVal){
        this.labels.push(obj);
        this.label = obj;
      }
    });

    angular.forEach(labelIds, (id) => {
      angular.forEach(labels, (obj) => {
        if(obj.id === parseInt(id)){
          obj.desc = obj.name;
          this.labels.push(obj);
        }
      });
    });

    var i = 0;
    var vm = this;
    var loop = function(){
     vm.timer = vm.$timeout(function(){
        if(i >= vm.labels.length){
          i = 0;
        }
        vm.label = vm.labels[i];
        i++;
        loop();
      },5000)
    };
    loop();
  }
}

