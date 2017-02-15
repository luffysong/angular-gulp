import krData from 'krData';

const commercialApi = new krData.API('/company/:id/business-info');

export default class commercialInfo {
  getInfo(id) {
    return commercialApi.get({id});
  }

}
