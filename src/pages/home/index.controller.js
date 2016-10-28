import krData from 'krData';

class TestAPI extends krData.API {

}

@Inject('indexService', '$timeout', '$window')
export default class IndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
    this.columnOptions = {};
  }

  init() {
    this.tags = ['旅游', 'isFunding',
      '电子商务', '的三大大',
      'savegroup', 'testst',
    ];
    this.loadDataBind = this.loadData.bind(this);
    this.isFunding = true;
    this.params = {
      phase: 'A',
    };
  }
  loadData() {
    krData.utls.getService('$log').info('text:', this.params);
  }

}

