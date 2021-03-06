import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('landingIndexService', '$timeout', '$window','$stateParams','$state','$scope', 'user')
export default class landingParentController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.isInvestor = this.user.isInvestor();
    this.params = {

    };
    /*筛选器展开*/
    this.open = {
      filter: false
    };

    this.activeTab = 'company';
    this.searchList = [
      {
        name:'创业项目',
        value: 'company',
        cnt: 280,
        active:true
      },{
        name:'投资人',
        value: 'user',
        cnt: 280,
        active:false
      },{
        name:'投资机构',
        value: 'org',
        cnt: 280,
        active:false
      }
    ];


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
      this.keyword = d.kw ? d.kw : '';
      this.activeTab = d.type ? d.type : 'company';
      this.handleSearchList(this.activeTab);
      this.params = Object.assign({},d);
      var params = Object.assign({},this.paramsFilter(this.params));
      this.searchCompany(params);
      this.getAll();
    });

    this.$scope.$on('open-sideBar',(e,d) => {
      this.columnOptions = d;
      this.open.sideBar = true;
    });

    this.getCity();

    this.getIndustry();

    this.getLabel();

    this.getPhase();

  }

  handleSearchList(tab) {
    angular.forEach(this.searchList,item => {
      if(item.value === tab) {
        item.active = true;
      }else {
        item.active = false;
      }
    });
  }

  hasIndustry() {
    return this.params.industry && this.params.industry !== 'unlimited';
  }

  searchCompany(params) {
    this.projectService.searchCompany(params).then(data => {
      this.$scope.$broadcast('get-list',data.pageData);
      if(data.label) {
        this.data.label = data.label;
        this.data.label[0].value = 'unlimited';
      }
      this.handleActive();
      this.updateData(data);
    }, (err) => {
        if(err.code === 403){
          krData.Alert.alert('需要登录后进行查看！');
          this.$timeout(() => this.$scope.root.user.ensureLogin(), 3000);
        } else {
          krData.Alert.alert(err.msg);
        }
    });
  }

  getAll() {
    this.projectService.searchCompany({
      type: 'all-count',
      kw: this.keyword
    }).then(data => {
      angular.forEach(this.searchList,item => {
        item.cnt = data[item.value+'Cnt'];
      })
    });
  }

  /*创业项目、投资人、投资机构切换*/
  switchType(index) {
    if(this.searchList[index].active)return;
    angular.forEach(this.searchList,(item,i) => {
      if(index == i){
        item.active = true;
        this.activeTab = item.value;
        var params = Object.assign({type: this.activeTab},this.paramsFilter(this.params));
        angular.forEach(this.params,(val,key) => {
          if(key !== 'kw'){
            this.params[key] = null;
          }
        });
        this.params.type = item.value;
        if(this.params.type === 'company'){
          this.params.sortField = 'MATCH_RATE';
        }
        this.go();
      }else {
        item.active = false;
      }
    });
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
          angular.forEach(this.data['isFundingLimit'],k => {
            if(k.name === c.name || k.id+'' === c.id+'') {
              k.cnt = c.cnt;
            }
          })
        });
        return;
      }
      if(!d[item.name] || !d[item.name].length)return;
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
      if(val && val.split(',').length > 1){
        angular.forEach(val.split(','),(a) => {
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
    this.handleLabel();
  }

  /*收起筛选器展示已选择的标签*/
  handleLabel() {
    var temp = {
      industry: 'desc',
      label: 'name',
      phase: 'desc',
      city: 'name',
      isFundingLimit: 'name'
    };
    this.filterData = {};
    Object.keys(this.data).forEach(key => {
      angular.forEach(this.data[key], item => {
        if(item.active && item.value !== 'unlimited' && item.id !== 'unlimited') {
          if(this.filterData[key]) {
            this.filterData[key] += ','+item[temp[key]];
          }else {
            this.filterData[key] = item[temp[key]];
          }
        }
      });
    });
  }

  /*筛选器选择行业*/
  selectIndustry (index,type) {
    // 行业选择
    if (type === 'industry') {
      this.params.industry = this.data.industry[index].value;
      this.params.label = 'unlimited';
      this.go();
      return;
    }
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
    arr.splice(arr.indexOf(id+''),1);
    this.params[type] = arr.join(',');
    /*this.params[type] = null;*/
    this.go();
  }

  /*state跳转*/
  go () {
    this.$state.go('landing.result', this.params);
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
      if(!this.params[item] && this.data[item].length) {
        this.data[item][0].active = true;
      }
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
    this.data.industry = this.addItem(this.$scope.root.LIST_COMPANY_INDUSTRY_META);
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


  orderBySortField(sortField){
    this.params['sortField'] = sortField;
    if(sortField === 'STOCK_AT'){
        this.isStockAt = true;
        this.isStartDate = false;
        this.isMatchRate = false;
    }else if(sortField === 'START_DATE'){
        this.isStockAt = false;
        this.isStartDate = true;
        this.isMatchRate = false;
    } else if(sortField === 'MATCH_RATE'){
        this.isStockAt = false;
        this.isStartDate = false;
        this.isMatchRate = true;
    }
    this.go();
  }

}

