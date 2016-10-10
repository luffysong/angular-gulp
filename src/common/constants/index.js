import { FINANCE_PHASE_META, FINANCE_PHASE } from './financePhase.cs';
import { CURRENCY_UNIT, CURRENCY_UNIT_META } from './currencyUnit.cs';
import { OPERATION_STATUS_META, OPERATION_STATUS } from './operationStatus.cs.js';
import { COMPANY_NEWS_META, COMPANY_NEWS } from './companyNews.cs.js';
import { ROLE_META, ROLE } from './role.cs';
import { FINANCE_NEED_META, FINANCE_NEED } from './financeNeed.cs';
import { PROJECT_TYPE_META, PROJECT_TYPE } from './projectType.cs';
import { COMPANY_FINANCE_PHASE_META, COMPANY_FINANCE_PHASE } from './companyFinancePhase.cs.js';
export {
  FINANCE_PHASE_META, FINANCE_PHASE,
  CURRENCY_UNIT, CURRENCY_UNIT_META,
  OPERATION_STATUS_META, OPERATION_STATUS,
  COMPANY_NEWS_META, COMPANY_NEWS,
  ROLE_META, ROLE,
  FINANCE_NEED_META, FINANCE_NEED,
  COMPANY_FINANCE_PHASE_META, COMPANY_FINANCE_PHASE,
};
angular.module('@@app.constants', [])
  .constant('FINANCE_PHASE', FINANCE_PHASE)
  .constant('FINANCE_PHASE_META', FINANCE_PHASE_META)
  .constant('CURRENCY_UNIT', CURRENCY_UNIT)
  .constant('CURRENCY_UNIT_META', CURRENCY_UNIT_META)
  .constant('OPERATION_STATUS_META', OPERATION_STATUS_META)
  .constant('OPERATION_STATUS', OPERATION_STATUS)
  .constant('COMPANY_NEWS_META', COMPANY_NEWS_META)
  .constant('COMPANY_NEWS', COMPANY_NEWS)
  .constant('FINANCE_NEED_META', FINANCE_NEED_META)
  .constant('FINANCE_NEED', FINANCE_NEED)
  .constant('PROJECT_TYPE_META', PROJECT_TYPE_META)
  .constant('PROJECT_TYPE', PROJECT_TYPE)
  .constant('ROLE_META', ROLE_META)
  .constant('ROLE', ROLE)
  .constant('COMPANY_FINANCE_PHASE', COMPANY_FINANCE_PHASE)
  .constant('COMPANY_FINANCE_PHASE_META', COMPANY_FINANCE_PHASE_META);

