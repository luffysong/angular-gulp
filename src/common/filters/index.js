import * as META from '../constants/index';
import industry from './industry.filter';
import { getConstantFilterFactory } from '../base/utls';

angular.module('@@app.filters', [])
  .filter('financePahse', getConstantFilterFactory(META.FINANCE_PHASE_META))
  .filter('operationStatus', getConstantFilterFactory(META.OPERATION_STATUS_META))
  .filter('currencyUnit', getConstantFilterFactory(META.CURRENCY_UNIT_META))
  .filter('companyFinancePhase', getConstantFilterFactory(META.COMPANY_FINANCE_PHASE_META))
  .filter('industry', industry);
