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
    url: '/n/api/investor/investment/visible',
  },
});

@Inject('$state')
export default class InvestorInfo {

  api = investorInfoApi;

  getInfo(id) {
    return investorInfoApi.get({
      id,
    }).catch((err) => {
      if (err.code === 404) {
        this.$state.go('fail.404');
      }
    });
  }

  getInvestment(id) {
    return investorInfoApi.investment({
      id,
    }).catch(() => ({}));
  }

  changeInvestmenVisible(cname,state) {
    const visible = {
      cname: cname,
      visible: state,
    };
    return investorInfoApi.setVisible(visible)
    .catch(() => ({}));
  }
}
