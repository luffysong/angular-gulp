import krData from 'krData';
const projectApi = new krData.API('/company/:id', [
  'addPrivilege',
  'privilege',
  'addFunds',
], {
  fundState: 'funds-state',
});
export default class CreateProject {

  FINANCE_NONE = 0;
  FINANCE_ALLOW = 1;
  FINANCE_AUDITING = 2;

  create(data) {
    const api = new krData.API('/company/action/create');
    return api.save(null, data);
  }

  suggest(kw) {
    const api = new krData.API('/suggest/company');
    return api.query({
      kw,
    });
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
      .catch(() => this.FINANCE_NONE);
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
