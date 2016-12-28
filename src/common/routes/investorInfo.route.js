import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
import phantom from '../base/phantom';
const investorInfoView = {
  url: '/investor/{id:int}',
  templateUrl: '/pages/investorInfo/templates/index.html',
  controllerAs: 'investorInfoVm',
  controller: 'investorInfoController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.investorInfo),
    investorData: /* @ngInject */
    function loadInvestorData(loadBundle, investorInfoService, $stateParams, resolveData,
      seoService) {
      const seoPromise = seoService.investorSeo($stateParams.id);
      const investorPromise = investorInfoService.getInfo($stateParams.id)
      .then(data => (resolveData.investorData = data));
      phantom.renderAsync([seoPromise, investorPromise]);
      return investorPromise;
    },
  },
};

const investorInfoEdit = {
  url: '/edit',
  parent: investorInfoView,
  views: {
    NULL: {
      template: '',
      controlrAs: 'editProjectVM',
      controller: 'EditInvestorController',
    },
  },
};
export {
  investorInfoView,
  investorInfoEdit,
};
