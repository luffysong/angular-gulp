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
  // 获取当前登录用户
  getUser() {
    this.user = new API('/user')
    .get();
    return this.user;
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
  // 创建收藏夹
  createCollect(form) {
    this.createCollection = new API('/user/follow/company', ['savegroup'])
    .savegroup(form);
    return this.createCollection;
  }
  // 收藏公司
  collectCompany(form) {
    let id = {
      id: form.cid,
    };
    this.collect = new API('/user/follow/company/:id', ['save'])
    .save(id, form);
    return this.collect;
  }
  // 取消收藏
  deleteCompany(form) {
    let id = {
      id: form.cid,
    };
    this.delete = new API('/user/follow/company/:id?'+ $.param(form), ['delete'])
    .delete(id, form);
    return this.delete;
  }
  // 获取公司认领人信息
  getManager(id){
    this.manager = new API('/company/:id/privilege?type=manager').get(id);
    return this.manager;
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
      // product: this.product(id),
      finance: this.finance(id),
      similar: this.similar(id),
      member: this.member(id),
      funds: this.funds(id),
      news: this.news(id),
    });
  }
}
