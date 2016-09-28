import { extractMeta } from '../base/utls';

const FINANCE_PHASE_META = [{
  desc: '天使轮',
  id: 10,
  value: 'ANGEL',
}, {
  desc: 'Pre-A轮',
  id: 20,
  value: 'PRE_A',
}, {
  desc: 'A轮',
  id: 30,
  value: 'A',
}, {
  desc: 'A+轮',
  id: 35,
  value: 'A_PLUS',
}, {
  desc: 'B轮',
  id: 40,
  value: 'B',
}, {
  desc: 'B+轮',
  id: 45,
  value: 'B_PLUS',
}, {
  desc: 'C轮',
  id: 50,
  value: 'C',
}, {
  desc: 'D轮',
  id: 60,
  value: 'D',
}, {
  desc: 'E轮及以后',
  id: 70,
  value: 'E',
}, {
  desc: '并购',
  id: 100,
  value: 'ACQUIRED',
}, {
  desc: '上市',
  id: 110,
  value: 'IPO',
}];

const FINANCE_PHASE = extractMeta(FINANCE_PHASE_META);

export {
  FINANCE_PHASE,
  FINANCE_PHASE_META,
};
