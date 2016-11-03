import krData from 'krData';

const investmentApi = new krData.API('/org/:id', [
  'investment'
  ]);

export default class Investment {
  getList(id,params) {
    return investmentApi.investment({id, ...params},
    );
  }
}
