import krData from 'krData';

const investorInfoApi = new krData.API('/investor/:id', ['investment',
  'updateBasic',
  'updateIntro',
  'addInvestment',
  'add',
], {
  updatePrefer: 'invest_preference',
  setVisible: {
    method: 'put',
    url: '/api/investor/investment/:cid/visible',
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

  changeInvestmenVisible(cid,state) {
    const visible = {
      visible: state,
    };
    return investorInfoApi.setVisible({
      cid
    }, visible)
    .catch(() => ({}));
  }
}
