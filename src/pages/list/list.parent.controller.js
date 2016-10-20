import krData from 'krData';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state','$scope')
export default class listParentController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  init() {

    this.params = {};
    /*筛选器展开*/
    this.open = {
      filter: false
    };

    this.data = {
      industry: [
        {
          name: '不限',
          number: '99980',
          desc: 'all'
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'eco'
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b'
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c'
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'a'
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b'
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c'
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'a'
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b'
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c'
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'a'
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b'
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c'
        }
      ],
      tag: [
        {
          name: '不限',
          number: '99980'
        },
        {
          name: '电子商务',
          number: '1080'
        },
        {
          name: '社交网络',
          number: '1977'
        },
        {
          name: '只能硬件撒旦',
          number: '1283'
        }
      ],
      fundPhase: [
        {
          name: '不限',
          number: '99980'
        },
        {
          name: '电子商务',
          number: '1080'
        },
        {
          name: '社交网络',
          number: '1977'
        },
        {
          name: '只能硬件撒旦',
          number: '1283'
        }
      ],
      address: [
        {
          name: '不限',
          number: '99980',
          desc: 'all'
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'a'
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b'
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c'
        },
        {
          name: '电子商务',
          number: '1080'
        },
        {
          name: '社交网络',
          number: '1977'
        },
        {
          name: '只能硬件撒旦',
          number: '1283'
        },{
          name: '不限',
          number: '99980'
        },
        {
          name: '电子商务',
          number: '1080'
        },
        {
          name: '社交网络',
          number: '1977'
        },
        {
          name: '只能硬件撒旦',
          number: '1283'
        }
      ],
      requirement: [
        {
          name: '不限',
          number: '99980',
          active:true
        },
        {
          name: '电子商务',
          number: '1080',
          active:false
        },
        {
          name: '社交网络',
          number: '1977',
          active:false
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          active:false
        }
      ],
    };

    this.$scope.$on('get-change',(e,d) => {
      this.dataInit();
      if(!Object.keys(d).length)return;
      angular.forEach(d,(val,key) => {
        angular.forEach(this.data[key],(item,index) => {
          if(item.desc === val) {
            item.active = true;
          }
        });
      });
    });

    /*筛选器选择行业*/
    this.selectIndustry = (index,type) => {
      this.params[type] = this.data[type][index].desc;
      this.go();
    };

    /*筛选器展开*/
    this.spreadMore = (type) => {
      this.open[type] = !this.open[type];
    };

    /*取消选择行业*/
    this.clearIndustry = (type) => {
      this.params[type] = null;
      this.go();
    }

    /*state跳转*/
    this.go = () => {
      this.$state.go('list.result', this.params);
    }

    /*数据active全部初始化*/
    this.dataInit = () => {
      Object.keys(this.data).forEach((item) => {
        angular.forEach(this.data[item],(obj) => {
          obj.active = false;
        });
      });
    };
  }

}

