import krData from 'krData';
const projectApi = new krData.API('/company/:id', [
  'addPrivilege',
  'privilege',
]);
export default class CreateProject {

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

  claim(id, data) {
    return projectApi.addPrivilege({
      id,
    }, data);
  }
}
