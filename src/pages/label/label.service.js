@Inject('$q')
export default class labelIndexSerivce {

  getPerson() {
    const ps = {
      name: 'const',
      age: 22,
    };
    return this.$q.when(ps);
  }
}

