import krData from 'krData';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window','$stateParams','$state')
export default class listIndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  init() {
    this.api.get();
    this.$timeout(() => {
      this.name = 'sky 124';
    });

    this.params = {};
    /*处理路由参数*/
    this.handleParams = () => {
      angular.forEach($stateParams, function (val, key) {
        if (val) {
          _this.params[key] = val;
        }
      })
    };

    this.data = {
      industry: [
        {
          name: '不限',
          number: '99980',
          desc: 'all',
          active:false
        },
        {
          name: '电子商务',
          number: '1080',
          desc: 'a',
          active:false
        },
        {
          name: '社交网络',
          number: '1977',
          desc: 'b',
          active:false
        },
        {
          name: '只能硬件撒旦',
          number: '1283',
          desc: 'c',
          active:false
        }
      ],
      tag: [
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
      fundPhase: [
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
      address: [
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

    /*筛选器选择行业*/
    this.selectIndustry = (index) => {
      /*angular.forEach(this.data.industry,(item) => {
        item.active = false;
      });
      this.data.industry[index].active = true;*/
      this.params.industry = this.data.industry[index].desc;

      this.go();
    };

    /*取消选择行业*/
    this.clearIndustry = () => {
      this.params.industry = null;
      this.go();
    }

    /*state跳转*/
    this.go = () => {
      console.warn(this.params);
      this.$state.go(this.$state.current.name, this.params);
    }

    /*根据路由参数激活*/
    this.handleActive = () => {
      if(this.$stateParams.industry) {
        angular.forEach(this.data.industry,(item,index) => {
          if(item.desc === this.$stateParams.industry) {
            item.active = true;
          }
        });
      }
    };

    this.handleActive();
    this.listIndexService.getPerson()
      .then(person => {
        this.name = person.name;
        this.age = person.age;
      });
  }

}

