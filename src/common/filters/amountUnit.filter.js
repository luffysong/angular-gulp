import { getConstantFilterFactory } from '../base/utls';

const AmountUnit = [
  {
    desc: '人民币',
    id: 10,
    value: 'CNY',
  },
  {
    desc: '美元',
    id: 20,
    value: 'USD',
  }
];

export  {
  AmountUnit
}
export default getConstantFilterFactory(AmountUnit);
