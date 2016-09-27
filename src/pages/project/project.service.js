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
      'addprivilege',
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
  // 获取用户收藏夹
  collect(id) {
    this.collection = new API('/user/follow/company/:id', {
      group: {
        isArray: true,
      } })
    .group(id);
    return this.collection;
  }
  createCollect(form) {
    this.createCollection = new API('/user/follow/company', ['savegroup']).savegroup(form);
    return this.createCollection;
  }


  getArea(id) {
    return new API('/dict/area').get({
      parentId: id || 0,
    }).then(data => data.data);
  }
  allData(id) {
    return this.$q.all({
      collection: this.collect(id),
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
