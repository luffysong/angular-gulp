import {
  API
} from 'krData';

const investorApi = new API('/investor/auth', [], {
  getState: {
    action: 'state',
  },
  getMsgCode: {
    action: 'get-verify-code',
  },
  validateMsgCode: {
    action: 'validate-code',
  },
  suggestInvestor: {
    action: 'suggest-investor',
    isArray: true,
  },
});

const indexApi = new API('/index', [], {
  column: {
    action: 'column',
  },
  label: {
    action: 'label',
  },
  investor: {
    action: 'investor',
  },
  newProject: {
    action: 'new-pro',
    isArray: true,
  },
  fundExpress: {
    action: 'fund-express',
    isArray: true,
  },
  recommendPro: {
    action: 'recommend-pro',
    isArray: true,
  },
});

const labelApi = new API('/label', [], {
  hotLabel: {
    action: 'hot',
    isArray: true,
  },
});

@Inject('$q', '$state', '$timeout')
export default class ProjectService extends API {

  constructor() {
    super('/company/:id', [
      'product',
      'funds',
      'member',
      'editHeader',
      'editBase',
      'editmember',
      'editIntroduce',
      'addprivilege',
      'addnews',
      'addproduct',
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
          }
        })
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
      this.deconste = new API(`/user/follow/company/:id?${$.param(form)}`)
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
      this.sendBp = new API('/company/:id/funds/bp?action=send2email', ['']).save(id, id);
      return this.sendBp;
    }
    // // 申请查看bp
  applyBP(cid) {
    const id = {
      id: cid,
    };
    this.applyPermission = new API('/company/:id/funds/bp/permission', ['']).save(id, id);
    return this.applyPermission;
  }

  //是否上传bp
    existBP(cid) {
    const id = {
      id: cid,
    };
    this.exist = new API('/company/:id/bp/status').get(id);
    return this.exist;
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
    this.getTitle = new API(`/company/fetch-link-title?${$.param(urlTitle)}`).get();
    return this.getTitle;
  }

  // 投资人联想
  suggest(kw) {
    const api = new API('/suggest/investment');
    return api.query({
      kw,
    });
  }

  suggestOrg(kw) {
    const api = new API('/suggest/org');
    return api.query({
      kw,
    });
  }

  suggestComAndOrg(kw) {
    const api = new API('/suggest/com-and-org');
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

  /* 获取列表页筛选条件 */
  getColumn(obj) {
    const id = {
      id: obj.columnId,
    };
    delete obj.columnId;
    for (const k in obj) {
      if (!obj[k]) {
        delete obj[k];
      }
    }
    return new API(`/column/:id/company?${$.param(obj)}`).get(id);
  }

  getFinance(id) {
    return this.finance(id)
      .catch((err) => {
        if (err.code === API.ERROR_CODE.NOT_LOGIN) {
          return {};
        }
        return this.$q.reject(err);
      });
  }

  getMember(id) {
    return this.member(id)
      .catch((err) => {
        if (err.code === API.ERROR_CODE.NOT_LOGIN) {
          return {};
        }
        return this.$q.reject(err);
      });
  }

  /* 标签信息*/
  getLabel(obj) {
    const id = {
      id: obj.labelId,
    };
    return new API('/label/:id').get(id);
  }

  getLabelId(obj) {
    const label = {
      industry: obj.value,
    };
    this.labelId = new API(`/label/id?${$.param(label)}`).get();
    return this.labelId;
  }

  /* 标签头部数据 */
  getLabelStat(obj) {
    const id = {
      id: obj.labelId,
    };
    return new API('/label/:id/stats').get(id);
  }



  /* 标签下公司数据*/
  getLabelCompany(obj) {
    const id = {
      id: obj.labelId,
    };
    delete obj.labelId;
    return new API(`/label/:id/company?${$.param(obj)}`).get(id);
  }

  /* 关注标签*/
  followLabel(obj) {
    return new API('/label/:id/followed').save({
      id: obj.id,
    });
  }

  /* 取消关注标签*/
  unFollowLabel(obj) {
    return new API('/label/:id/followed').remove({
      id: obj.id,
    });
  }

  /* 落地页获取公司列表*/
  searchCompany(obj) {
    const type = obj.type || 'company';
    delete obj.type;
    for (const k in obj) {
      if (!obj[k]) {
        delete obj[k];
      }
    }
    return new API(`/search/${type}?${$.param(obj)}`).get();
  }

  /* 获取关注标签列表*/
  getFollowList() {
    return new API('/label', {
      followed: {
        isArray: true,
      },
    }).followed();
  }

  getFollowCompany(obj) {
    const id = {
      id: obj.labelId,
    };
    delete obj.labelId;
    for (const k in obj) {
      if (!obj[k]) {
        delete obj[k];
      }
    }
    return new API(`/label/:id/followed/company?${$.param(obj)}`).get(id);
  }

  /* 获取全部标签*/
  getAllLabel() {
    return new API('/label', {
      expose: {
        isArray: true,
      },
    }).expose();
  }

  /* 获取短信验证码*/
  getMsgCode(obj) {
      return investorApi.getMsgCode(obj);
    }
    /* 验证短信码*/
  validateMsgCode(obj) {
      return investorApi.validateMsgCode(obj);
    }
    /* 提交认证*/
  submitValidate(obj) {
      return investorApi.save(null, obj);
    }
    /* 获取推荐投资人*/
  suggestInvestor(obj) {
      return investorApi.suggestInvestor(obj);
    }
    /* 获取投资人认证状态*/
  getState() {
    return investorApi.getState();
  }

  // 设置接收BP的邮箱
  addBPEmail(emai) {
    const email = {
      email: emai,
    };
    return new API('/investor/common-email').update(null, email);
  }

  // 首页公司栏目模块
  indexColumn() {
    return indexApi.column();
  }

  // 首页
  indexLabel() {
    return indexApi.label();
  }

  indexProject() {
    return indexApi.newProject();
  }

  indexFundExpress(obj) {
    return indexApi.fundExpress(obj);
  }

  indexRecommendPro() {
    return indexApi.recommendPro();
  }

  /* 首页投资人接口*/
  indexInvestor() {
    return indexApi.investor();
  }

  // 热门标签
  getHotLabel() {
    return labelApi.hotLabel();
  }

  //首页banner列表
  getBannerList(request) {
    return new API('/banner').get(request).then(data => data.data);
  }

  // FIXME: 此处因为服务端数据出错
  // 临时处理错误数据为空数据
  // 2016-10-23 11:27
  allData(id) {
    return this.$q.all({
      baseInfo: this.get(id).catch((err) => {
        if (err.code === 404) {
          this.$state.go('fail.404');
        }else if(err.code === 403) {
          krData.Alert.alert('需要登录后进行查看！');
          this.$timeout(() => window.location = 'https://passport.36kr.com/', 3000);
        }else if(err.code === 429) {
          krData.Alert.alert(err.msg);
        }
      }),
      product: this.product(id).catch(() => {}),
      finance: this.getFinance(id),
      similar: this.similar(id).catch(() => []),
      member: this.getMember(id),
      funds: this.funds(id),
      news: this.news(id).catch(() => {}),
    });
  }
}