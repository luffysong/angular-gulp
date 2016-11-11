import krData from 'krData';

const investorInfoApi = new krData.API('/investor/:id', ['investment',
  'updateBasic',
  'addInvestment',
  'add',
], {
  updatePrefer: 'invest_preference',
  setVisible: {
    url: ' /api/investor/investment/:cid/visible',
  },
});

export default class InvestorInfo {

  api = investorInfoApi;

  getInfo(id) {
    return investorInfoApi.get({
      id,
    }).catch(() => ({}));
  }

  getInvestment(id) {
    return investorInfoApi.investment({
      id,
    }).catch(() => ({}));
  }

}
