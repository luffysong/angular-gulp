import krData from 'krData';

class TestAPI extends krData.API {

}

@Inject('indexService', '$timeout', '$window')
export default class IndexController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  init() {
    this.api.get();
    this.$timeout(() => {
      this.name = 'sky 124';
    });
    this.indexService.getPerson()
      .then(person => {
        this.name = person.name;
        this.age = person.age;
      });
  }

}

