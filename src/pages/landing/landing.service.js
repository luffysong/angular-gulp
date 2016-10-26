@Inject('$q')
export default class landingIndexSerivce {

  getPerson() {
    const ps = {
      name: 'const',
      age: 22,
    };
    return this.$q.when(ps);
  }
}

