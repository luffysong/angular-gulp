import krData from 'krData';
import ProjectService from '../project/project.service';
@Inject('vm')
class labelController {
  constructor() {
    this.getLabel();
    this.updateLabel();
  }
  getLabel() {
    this.vm.projectService.getFollowList().then(data => {
      if (!data.length) {
        this.vm.labelEmpty = true;
      } else {
        this.vm.labelEmpty = false;
      }
      this.followLabelList = data;
      this.updateLabel();
    });
  }
  cancel() {
    this.vm.labelDialog.close();
    this.vm.$state.go('follow.result', {
      columnId: 2,
    }, {
      reload: true,
    });
  }
  followLabel(id) {
    this.vm.projectService.followLabel({
      id,
    }).then(() => {
      this.getLabel();
    }).catch(err => {
      krData.Alert.alert(`出错啦：${err.msg || '未知错误'}`);
    });
  }
  goDetail(id) {
    this.cancel();
    this.vm.$state.go('label.result', {
      labelId: id,
    });
  }
  unFollowLabel(id, e) {
    e.stopPropagation();
    this.vm.projectService.unFollowLabel({
      id,
    }).then(() => {
      this.getLabel();
    });
  }
  /* 过滤已关注标签 */
  updateLabel() {
    this.allLabel = this.vm.allLabel.concat();
    angular.forEach(this.followLabelList, item => {
      angular.forEach(this.allLabel, (obj, index) => {
        if (`${obj.id}` === `${item.id}`) {
          this.allLabel.splice(index, 1);
        }
      });
    });
  }

}

@Inject('followIndexService', '$timeout', '$window', '$stateParams', '$state', '$scope',
  'user', 'ngDialog','$location')
export default class followParentController {

  constructor() {
    this.init();
  }

  columnOptions = {};
  projectService = new ProjectService();

  init() {
    this.closeAnnouncement = window.closeAnnouncement;
    this.params = {

    };
    this.currentPage = this.$location.search().p || 1;

    /* 筛选器展开 */
    this.open = {
      filter: false,
    };

    this.result = [];

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
      angular.extend(this.params, d);
      this.params['p'] = this.currentPage;
      if (this.params.labelId) {
        const params = Object.assign({}, this.paramsFilter(this.params));
        this.projectService.getFollowCompany(params).then(data => {
          this.dataHandle(data);
        });
      } else {
        const params = Object.assign({ columnId: this.params.columnId || 2 },
          this.paramsFilter(this.params));
        this.projectService.getColumn(params).then(data => {
          this.dataHandle(data);
          this.totalCount = data.pageData.totalCount;
        }).catch(data => {
          if (`${data.code}` === '200') {
            this.labelEmpty = true;
          }
        });
      }
    });

    this.$scope.$on('open-sideBar', (e, d) => {
      d.labels = this.followLabel;
      d.switchType = this.switchType.bind(this);
      this.columnOptions = d;
      this.open.sideBar = true;
    });

    this.getCity();

    this.getIndustry();

    this.getPhase();

    this.getLabel();

    this.getAllLabel();
  }


  addLabel() {
    const vm = this;
    vm.labelDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/follow/templates/labelModal.html\'"></div>',
      className: 'label-dialog',
      resolve: {
        vm: () => vm,
      },
      plain: true,
      controller: labelController,
      closeByDocument: false,
      controllerAs: 'vm',
    });
  }

  spreadMore(type) {
    this.open[type] = !this.open[type];
  }

  spreadLabel() {
    this.isOpen = !this.isOpen;
  }

  getAllLabel() {
    this.projectService.getAllLabel().then(data => {
      this.allLabel = data;
    });
  }

  getLabel() {
    this.projectService.getFollowList().then(data => {
      if (!data || !data.length) return;
      this.manageLabel = data.concat();
      this.followLabel = data;
      this.handleActive();
    });
  }

  dataHandle(data) {
    this.result.length = 0;
    data.pageData.data.forEach(item => {
      this.result.push(item);
    });
    data.pageData.data = this.result;
    this.$scope.$broadcast('get-list', data.pageData);
    this.data.label = data.label;
    this.data.label[0].value = 'unlimited';
    this.handleActive();
    this.updateData(data);
  }

  /* 创业项目、投资人、投资机构切换 */
  switchType(index) {
    if (this.followLabel[index].active) return;
    angular.forEach(this.followLabel, (item, i) => {
      if (`${index}` === `${i}`) {
        item.active = true;
        angular.forEach(this.params, (val, key) => {
          if (key !== 'columnId') {
            this.params[key] = null;
          }
        });
        this.params.labelId = item.id;
        this.go();
      } else {
        item.active = false;
      }
    });
  }


  /* 过滤不限条件 */
  paramsFilter(target) {
    const o = Object.assign({}, target);
    Object.keys(o).forEach((item) => {
      if (o[item] === 'unlimited') {
        delete o[item];
      }
    });
    return o;
  }

  /* 通过接口返回数据更新筛选器数字 */
  updateData(d) {
    Object.keys(this.data).forEach(item => {
      if (item !== 'label') {
        angular.forEach(this.data[item], obj => {
          obj.cnt = 0;
        });
      }
    });
    angular.forEach(this.itemList, (item) => {
      /* 筛选条件特殊处理 */
      if (item.name === 'isFundingLimit') {
        angular.forEach(d.funding, (c) => {
          angular.forEach(this.data.isFundingLimit, k => {
            if (k.name === c.name || `${k.id}` === `${c.id}`) {
              k.cnt = c.cnt;
            }
          });
        });
        return;
      }
      if (!d[item.name] || !d[item.name].length) return;
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

  /* 根据路由参数处理激活 */
  handleActive() {
    this.dataInit();
    angular.forEach(this.params, (val, key) => {
      if (key === 'labelId' && val) {
        angular.forEach(this.followLabel, item => {
          if (`${item.id}` === val) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      }
      if (val && val.split(',').length > 1) {
        angular.forEach(val.split(','), (a) => {
          angular.forEach(this.data[key], (item) => {
            if (`${item.value}` === `${a}` || `${item.id}` === `${a}`) {
              item.active = true;
            }
          });
        });
      } else {
        angular.forEach(this.data[key], (item) => {
          if (`${item.value}` === `${val}` || `${item.id}` === `${val}`) {
            item.active = true;
          }
        });
      }
    });
    this.handleLabel();
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

  /* 筛选器选择 */
  selectIndustry(index, type) {
    // 行业选择
    if (type === 'industry') {
      this.params.industry = this.data.industry[index].value;
      this.params.label = 'unlimited';
      this.go();
      return;
    }
    /* 筛选器选择不限 */
    if (this.data[type][index].name === '不限' || this.data[type][index].desc === '不限') {
      this.params[type] = 'unlimited';
      this.go();
      return;
    }
    const attr = type === 'city' || type === 'isFundingLimit' || type === 'label' ? 'id' : 'value';
    if (this.params[type]) {
      if (this.params[type].split(',').indexOf(String(this.data[type][index][attr])) < 0) {
        const arr = this.params[type].split(',');
        if (arr.indexOf('unlimited') >= 0) {
          arr.splice(arr.indexOf('unlimited'), 1);
        }
        arr.push(this.data[type][index][attr]);
        this.params[type] = arr.join(',');
      }
    } else {
      this.params[type] = this.data[type][index][attr];
    }
    this.go();
  }

  hasIndustry() {
    return this.params.industry && this.params.industry !== 'unlimited';
  }
  /* 取消选择行业 */
  clearIndustry(id, type) {
    const arr = this.params[type].split(',');
    arr.splice(arr.indexOf(`${id}`), 1);
    this.params[type] = arr.join(',');
    this.go();
  }

  /* state跳转 */
  go() {
    this.$state.go('follow.result', this.params);
  }

  login() {
    krData.utls.login();
  }

  /* 增加默认数据 */
  addItem(obj, type) {
    if (!obj || !obj.concat) return undefined;
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

  /* 数据active全部初始化 */
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

  /* 获取静态城市数据 */
  getCity() {
    this.projectService.getArea(0)
      .then(data => {
        this.data.city = this.addItem(data, 'city');
        this.handleActive();
      });
  }

  /* 获取静态行业数据 */
  getIndustry() {
    this.data.industry = this.addItem(this.$scope.root.LIST_COMPANY_INDUSTRY_META);
  }


  /* 获取轮次静态数据 */
  getPhase() {
    this.data.phase = this.addItem(this.$scope.root.FUNDS_PHASE_ENUM_META);
  }

  orderBySortField(sortField){
    this.params['sortField'] = sortField;
    if(sortField === 'ADD_COLUMN_LABEL'){
        this.isStartDate = false;
        this.isAddColumnLabel = true;
    }else if(sortField === 'START_DATE'){
        this.isAddColumnLabel = false;
        this.isStartDate = true;
    }
    this.go();
  }
}

