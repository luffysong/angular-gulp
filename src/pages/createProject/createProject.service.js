import krData from 'krData';

function filterIndustry(data) {
  return data.filter(item => item.industry);
}
const projectApi = new krData.API('/company/:id', [
  'addPrivilege',
  'privilege',
  'addFunds',
], {
  fundState: 'funds-state',
});
const suggestApi = new krData.API('/suggest', [
  'company',
], {
  suggestProject: {
    action: 'company',
    isArray: true,
  },
  suggestClaim: {
    action: 'claim-com',
    isArray: true,
  },
});
export default class CreateProject {

  FINANCE_NONE = '0';
  FINANCE_ALLOW = '1';
  FINANCE_AUDITING = '2';

  create(data) {
    const api = new krData.API('/company/action/create');
    return api.save(null, data);
  }

  /* 此处需要处理脏数据，
   * 过滤industry不存在的数据，
   * industry不存在会引发严重的错误
   * 线上环境并不存在此类问题
   */
  suggest(kw) {
    return suggestApi.suggestProject({
      kw,
    }).then(filterIndustry);
  }

  suggestClaim(searchObj) {
    return suggestApi.suggestClaim(searchObj)
      .then(filterIndustry);
  }

  getPrivilege(id) {
    return projectApi.privilege({
      id,
      type: 'manager',
    });
  }

  financeState(id) {
    return projectApi.fundState({
      id,
    }).then(data => data.state)
      .catch((err) => err);
  }

  claim(id, data) {
    return projectApi.addPrivilege({
      id,
    }, data);
  }

  funds(id, data) {
    return projectApi.addFunds({
      id,
    }, data);
  }
}
