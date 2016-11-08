import { extractMeta } from '../base/utls';
const INVESTOR_ROLE_META = [
  {
    "desc": "个人投资人",
    "id": 1,
    "value": "PERSONAL_INVESTOR"
  },
  {
    "desc": "机构投资人",
    "id": 2,
    "value": "ORG_INVESTOR"
  }
];

const INVESTOR_ROLE = extractMeta(INVESTOR_ROLE_META);
export {
  INVESTOR_ROLE_META,
  INVESTOR_ROLE,
};
