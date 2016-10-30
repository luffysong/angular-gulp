@Inject('$q')
export default class followIndexSerivce {

  getPerson() {
    const ps = {
      name: 'const',
      age: 22,
    };
    return this.$q.when(ps);
  }
}

