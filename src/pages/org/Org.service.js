import { API } from 'krData';

@Inject('$q')
export default class OrgService extends API {
  constructor() {
    super('/org/:id', [
      'basic',
      'member',
      'investment',
      'analyze',
    ]);
  }

  allData(id) {
    return this.$q.all({
      basic: this.basic(id),
      member: this.member(id),
      investment: this.investment(id),
      analyze: this.analyze(id),
    });
  }
}
