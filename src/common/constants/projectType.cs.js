import { extractMeta } from '../base/utls';
const PROJECT_TYPE_META = [
  {
    desc: 'web产品',
    id: 1,
    value: 'WEB',
  },
  {
    desc: 'app应用',
    id: 2,
    value: 'APP',
  },
  {
    desc: 'web及app均有',
    id: 3,
    value: 'WEB_APP',
  },
  {
    desc: '微信公众号',
    id: 4,
    value: 'WECHAT',
  },
  {
    desc: "硬件及其他",
    id: 6,
    value: "HARDWARE_OTHER",
  },
  {
    desc: "产品未上线",
    id: 7,
    value: "NOT_ONLINE",
  },
];
const PROJECT_TYPE = extractMeta(PROJECT_TYPE_META);
export {
  PROJECT_TYPE,
  PROJECT_TYPE_META,
};
