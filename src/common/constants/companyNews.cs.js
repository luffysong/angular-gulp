import { extractMeta } from '../base/utls';
const COMPANY_NEWS_META = [{
  desc: '人员变动',
  id: 1,
  value: 'MEMBER_CHANGE',
}, {
  desc: '采访报道',
  id: 2,
  value: 'REPORT',
}, {
  desc: '融资',
  id: 3,
  value: 'FINANCE',
}];

const COMPANY_NEWS = extractMeta(COMPANY_NEWS_META);

export {
  COMPANY_NEWS,
  COMPANY_NEWS_META,
};
