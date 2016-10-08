import { extractMeta } from '../base/utls';
const FINANCE_NEED_META = [
  {
    desc: '未知',
    id: 1,
    value: 'UNKNOWN',
  },
  {
    desc: '寻求融资',
    id: 2,
    value: 'FINANCING',
  },
  {
    desc: '寻求收购',
    id: 3,
    value: 'ACQUISITION',
  },
  {
    desc: '暂无需求',
    id: 4,
    value: 'NO_NEED',
  },
];
const FINANCE_NEED = extractMeta(FINANCE_NEED_META);
export {
  FINANCE_NEED,
  FINANCE_NEED_META,
};
