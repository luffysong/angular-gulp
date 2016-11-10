import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';
const FINANCE = 'finance';
const CREATE = 'create';
export default {
  url: '/investor/validate',
  templateUrl: '/pages/investorValidate/templates/index.html',
  controllerAs: 'vm',
  controller: 'investorValidateController',
  resolve: {
    loadBundle: getLoadBundle(assets.page.investorValidate),
    step: () => 1,
    type: () => CREATE,
    financeState: () => undefined,
  },
};

