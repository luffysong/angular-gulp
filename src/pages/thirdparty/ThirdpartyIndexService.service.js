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

    queryInstitutes: {
      method: 'get',
      url: '/n/api/third-entity',
      isArray: true,
    },

    getCompany: {
      method: 'get',
      url: '/n/api/user/manage-com',
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

}
