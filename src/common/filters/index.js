import { FINANCE_PHASE_META } from '../constants/financePhase.cs';
import { getConstantFilterFactory } from '../base/utls';

angular.module('@@app.filters', [])
  .filter('financePahse', getConstantFilterFactory(FINANCE_PHASE_META));
