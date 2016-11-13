import krData from 'krData';

const investorListApi = new krData.API('/search/user');

export default class InvestorList {
  getList(params) {
    return investorListApi.get({...params},
    );
  }
}
