import { FINANCE_PHASE_META, FINANCE_PHASE } from './financePhase.cs';
import { CURRENCY_UNIT, CURRENCY_UNIT_META } from './currencyUnit.cs';
import { OPERATION_STATUS_META, OPERATION_STATUS } from './operationStatus.cs.js';
import { COMPANY_NEWS_META, COMPANY_NEWS } from './companyNews.cs.js';
export {
  FINANCE_PHASE_META, FINANCE_PHASE,
  CURRENCY_UNIT, CURRENCY_UNIT_META,
  OPERATION_STATUS_META, OPERATION_STATUS,
  COMPANY_NEWS_META, COMPANY_NEWS,
};
angular.module('@@app.constants', [])
  .constant('FINANCE_PHASE', FINANCE_PHASE)
  .constant('FINANCE_PHASE_META', FINANCE_PHASE_META)
  .constant('CURRENCY_UNIT', CURRENCY_UNIT)
  .constant('CURRENCY_UNIT_META', CURRENCY_UNIT_META)
  .constant('OPERATION_STATUS_META', OPERATION_STATUS_META)
  .constant('OPERATION_STATUS', OPERATION_STATUS)
  .constant('COMPANY_NEWS_META', COMPANY_NEWS_META)
  .constant('COMPANY_NEWS', COMPANY_NEWS);

