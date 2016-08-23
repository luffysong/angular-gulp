import krData from 'krData';

class Test extends krData.Network {

}

@Inject('indexService', '$timeout', '$window')
export default class IndexController {

  constructor() {
    new Test().echo();
    this.init();
  }

  init() {
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

