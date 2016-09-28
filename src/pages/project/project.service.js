import { API } from 'krData';

@Inject('$q')
export default class ProjectService extends API {
  constructor() {
    super('/company/:id', [
      'product',
      'funds',
      'member',
      'editHeader',
      'editBase',
    ], {
      news: {
        isArray: true,
      },
      similar: {
        isArray: true,
      },
      finance: {
        isArray: true,
      },
    });
  }

  getArea(id) {
    return new API('/dict/area').get({
      parentId: id || 0,
    }).then(data => data.data);
  }
  allData(id) {
    return this.$q.all({
      baseInfo: this.get(id),
      product: this.product(id),
      finance: this.finance(id),
      similar: this.similar(id),
      member: this.member(id),
      funds: this.funds(id),
      news: this.news(id),
    });
  }
}
