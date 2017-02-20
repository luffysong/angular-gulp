import krData from 'krData';

const commercialApi = new krData.API('/company/:id/business-info');
const projectBaseInfo = new krData.API('/company/:id');
export default class commercialInfo {
  getInfo(id) {
    return commercialApi.get({id});
  }

  getBaseInfo(id){
    return projectBaseInfo.get({id});
  }

}
