import krData from 'krData';
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
}
