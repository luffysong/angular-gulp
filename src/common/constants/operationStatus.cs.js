import { extractMeta } from '../base/utls';
const OPERATION_STATUS_META = [{
  desc: '3个月内上线',
  id: -1,
  value: 'ONLINE_IN_3MONTH',
}, {
  desc: '6个月内上线',
  id: -5,
  value: 'ONLINE_IN_6MONTH',
}, {
  desc: '运营中',
  id: 0,
  value: 'OPEN',
}, {
  desc: '停止运营',
  id: 1,
  value: 'CLOSED',
}];

const OPERATION_STATUS = extractMeta(OPERATION_STATUS_META);

export {
  OPERATION_STATUS,
  OPERATION_STATUS_META,
};
