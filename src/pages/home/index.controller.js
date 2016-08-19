import krData from 'krData';

class Test extends krData.Network {

}

@Inject('indexService')
export default class IndexController {

  constructor() {
    new Test().echo();
    this.init();
  }

  init() {
    this.indexService.getPerson()
      .then(person => {
        this.name = person.name;
        this.age = person.age;
      });
  }

}
