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
    desc: 'idea阶段',
    id: 5,
    value: 'IDEA',
  },
];
const PROJECT_TYPE = extractMeta(PROJECT_TYPE_META);
export {
  PROJECT_TYPE,
  PROJECT_TYPE_META,
};
