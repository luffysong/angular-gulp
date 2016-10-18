import krData from 'krData';

class TestAPI extends krData.API {

}

@Inject('listIndexService', '$timeout', '$window')
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

    this.data = {
      industry: [
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
    this.selectIndustry = (index,type) => {
      angular.forEach(this.data[type],(item,i) => {
        item.active = false;
      });
      this.data[type][index].active = true;
    };

    this.listIndexService.getPerson()
      .then(person => {
        this.name = person.name;
        this.age = person.age;
      });
  }

}

