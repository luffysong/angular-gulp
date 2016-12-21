import { extractMeta } from '../base/utls';
const OPERATION_STATUS_META = [{
  desc: '未上线',
  id: -1,
  value: 'NOT_ONLINE',
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
