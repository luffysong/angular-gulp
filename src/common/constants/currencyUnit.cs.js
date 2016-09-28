import { extractMeta } from '../base/utls';
const CURRENCY_UNIT_META = [{
  desc: '人民币',
  id: 1,
  value: 'CNY',
}, {
  desc: '美元',
  id: 2,
  value: 'USD',
}];

const CURRENCY_UNIT = extractMeta(CURRENCY_UNIT_META);

export {
  CURRENCY_UNIT,
  CURRENCY_UNIT_META,
};
