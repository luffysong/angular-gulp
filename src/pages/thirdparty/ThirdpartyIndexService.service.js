import krData from 'krData';

const ThirdpartyApi = new krData.API('', [
  '',
  ], {
    queryCompanys: {
      method: 'get',
      url: '/n/api/third-entity/:id/company',
    },
    queryInstituteDetail: {
      method: 'get',
      url: '/n/api/third-entity/:id',
    },
    saveCompany: {
      method: 'post',
      url: '/n/api/third-entity/:id/company',
    },

    getThirdFundsInfo: {
      method: 'get',
      url: ' /n/api/company/:id/third-funds-info',
    },

    queryInstitutes: {
      method: 'get',
      url: '/n/api/third-entity',
      isArray: true,
    },

    getCompanyStas: {
      method: 'get',
      url: '/n/api/third-entity/:id/manage-com',
    },

  });

export default class ThirdpartyIndexService {
  queryCompanys(params) {
    return ThirdpartyApi.queryCompanys(params);
  }

  queryInstituteDetail(id) {
    return ThirdpartyApi.queryInstituteDetail({ id });
  }

  saveCompany(id, params) {
    return ThirdpartyApi.saveCompany({ id }, params);
  }

  queryInstitutes() {
    return ThirdpartyApi.queryInstitutes();
  }

  getCompanyStas(id) {
    return ThirdpartyApi.getCompanyStas({ id });
  }

  getThirdFundsInfo(id) {
    return ThirdpartyApi.getThirdFundsInfo({ id });
  }

}
