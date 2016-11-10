import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const investorInfoView = {
  url: '/investor/{id:int}',
  templateUrl: '/pages/investorInfo/templates/index.html',
  controllerAs: 'investorInfoVm',
  controller: 'investorInfoController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.investorInfo),
    investorData: /* @ngInject */
    function loadInvestorData(loadBundle, investorInfoService, $stateParams, resolveData) {
      return investorInfoService.getInfo($stateParams.id)
      .then(data => (resolveData.investorData = data));
    },
  },
};

export {
  investorInfoView
};
