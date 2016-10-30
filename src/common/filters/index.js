import * as META from '../constants/index';
import industry from './industry.filter';
import amountUnit from './amountUnit.filter';
import enterFormat from './enterFormat.filter';
import cityFilterFactory from './city.filter.js';
import companySearchPhase from './companySearchPhase.filter.js';
import { getConstantFilterFactory } from '../base/utls';

angular.module('@@app.filters', [])
  .filter('financePhase', getConstantFilterFactory(META.FINANCE_PHASE_META))
  .filter('fundsPhaseEnum', getConstantFilterFactory(META.FUNDS_PHASE_ENUM_META))
  .filter('operationStatus', getConstantFilterFactory(META.OPERATION_STATUS_META))
  .filter('currencyUnit', getConstantFilterFactory(META.CURRENCY_UNIT_META))
  .filter('companyFinancePhase', getConstantFilterFactory(META.COMPANY_FINANCE_PHASE_META))
  .filter('role', getConstantFilterFactory(META.ROLE_META))
  .filter('amountUnit', amountUnit)
  .filter('enterFormat', enterFormat)
  .filter('city', cityFilterFactory)
  .filter('companySearchPhase', companySearchPhase)
  .filter('industry', industry);
