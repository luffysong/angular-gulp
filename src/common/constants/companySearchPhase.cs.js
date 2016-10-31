import { extractMeta } from '../base/utls';
const COMPANY_SEARCH_PHASE_META = [
  {
    desc: '未知轮次',
    id: -100,
    value: 'UNKNOWN',
  },
  {
    desc: '战略投资',
    id: -50,
    value: 'INFORMAL',
  },
  {
    desc: '未融资',
    id: 0,
    value: 'NONE',
  },
  {
    desc: '天使轮',
    id: 10,
    value: 'ANGEL',
  },
  {
    desc: 'Pre-A轮',
    id: 20,
    value: 'PRE_A',
  },
  {
    desc: 'A轮',
    id: 30,
    value: 'A',
  },
  {
    desc: 'A+轮',
    id: 35,
    value: 'A_PLUS',
  },
  {
    desc: 'B轮',
    id: 40,
    value: 'B',
  },
  {
    desc: 'B+轮',
    id: 45,
    value: 'B_PLUS',
  },
  {
    desc: 'C轮',
    id: 50,
    value: 'C',
  },
  {
    desc: 'D轮',
    id: 60,
    value: 'D',
  },
  {
    desc: 'E轮及以后',
    id: 70,
    value: 'E',
  },
  {
    desc: '并购',
    id: 100,
    value: 'ACQUIRED',
  },
  {
    desc: '上市',
    id: 110,
    value: 'IPO',
  },
];

const COMPANY_SEARCH_PHASE = extractMeta(COMPANY_SEARCH_PHASE_META);

export {
  COMPANY_SEARCH_PHASE,
  COMPANY_SEARCH_PHASE_META
};
