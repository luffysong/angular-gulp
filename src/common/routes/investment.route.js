import assets from '../assets/script';
import { getLoadBundle } from '../base/utls';

const investmentView = {
  url: '/org/{id:int}',
  templateUrl: '/pages/investment/templates/index.html',
  controllerAs: 'investmentVm',
  controller: 'investmentParentController',
  abstract: true,
  resolve: {
    loadBundle: getLoadBundle(assets.page.investment),
  },
};

const investment = {
  url: '/list?{phase}&{industry}&{open}',
  templateUrl: '/pages/investment/templates/result.html',
  parent: investmentView,
  controllerAs: 'vm',
  controller: 'investmentIndexController',
};

export {
  investmentView,
  investment,
};
