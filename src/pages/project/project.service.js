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
      'editmember',
      'addprivilege',
      'addnews',
      // 'addfinance',
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
      addfinance: {
        dataType: 'json',
      },
      fundState: 'funds-state',
    });
  }

  relateUser(id) {
    this.user = new API('/company/:id/relate-user')
    .query(id);
    return this.user;
  }
  // 获取当前登录用户
  getUser() {
    this.userinfo = new API('/user')
    .get();
    return this.userinfo;
  }
  // 获取用户收藏夹
  collect(cid) {
    const id = {
      id: cid,
    };
    this.collections = new API('/user/follow/company/:id', {
      group: {
        isArray: true,
      } })
    .group(id);
    return this.collections;
  }
  // 创建收藏夹
  createCollect(form) {
    this.createCollection = new API('/user/follow/company', ['savegroup'])
    .savegroup(form);
    return this.createCollection;
  }
  // 收藏公司
  collectCompany(form) {
    const id = {
      id: form.cid,
    };
    this.collected = new API('/user/follow/company/:id')
    .save(id, form);
    return this.collected;
  }
  // 取消收藏
  deconsteCompany(form) {
    const id = {
      id: form.cid,
    };
    this.deconste = new API('/user/follow/company/:id?' + $.param(form))
    .remove(id, form);
    return this.deconste;
  }
  // 获取公司认领人信息
  getManager(id) {
    this.manager = new API('/company/:id/privilege?type=manager').get(id);
    return this.manager;
  }
  // 校验是否有权限查看bp
  getBPPermission(cid) {
    const id = {
      id: cid,
    };
    this.permission = new API('/company/:id/funds/bp/permission-check').get(id);
    return this.permission;
  }
  // 获取bp链接
  getBPUrl(cid) {
    const id = {
      id: cid,
    };
    this.bpUrl = new API('/company/:id/funds/bp').get(id);
    return this.bpUrl;
  }
  // 发送bp到邮箱
  sendBP(cid) {
    const id = {
      id: cid,
    };
    this.send = new API('/company/:id/funds/bp?action=send2email', [''])
    .save(id, id);
    return this.send;
  }
  // // 申请查看bp
  applyBP(cid) {
    const id = {
      id: cid,
    };
    this.applyPermission = new API('/company/:id/funds/bp/permission', ['']).save(id, id);
    return this.applyPermission;
  }

  getArea(id) {
    return new API('/dict/area').get({
      parentId: id || 0,
    }).then(data => data.data);
  }

  // 获取新闻标题
  getNewsTitle(newsUrl) {
    const urlTitle = {
      url: newsUrl,
    };
    this.getTitle = new API('/company/fetch-link-title?' + $.param(urlTitle)).get();
    return this.getTitle;
  }

  // 投资人联想
  suggest(kw) {
    const api = new API('/suggest/investment');
    return api.query({
      kw,
    });
  }
  // 判断当前用户是否在审核认领
  claimPeding(cid) {
    const id = {
      id: cid,
    };
    this.claimpeding = new API('/company/:id/privilege?type=claim-pending')
    .get(id);
    return this.claimpeding;
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
