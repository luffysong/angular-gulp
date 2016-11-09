import krData from 'krData';

const investorInfoApi = new krData.API('/investor/:id', ['investment']);

export default class InvestorInfo {

  getInfo(id) {
    return investorInfoApi.get({id});
  }

  getInvestment(id) {
    return investorInfoApi.investment({id});
  }
}
