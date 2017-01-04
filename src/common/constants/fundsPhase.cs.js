import { extractMeta } from '../base/utls';
const FUNDS_PHASE_ENUM_META = [
  {
    "desc": "种子轮",
    "id": 5,
    "value": "SEED"
  },
  {
    "desc": "天使轮",
    "id": 10,
    "value": "ANGEL"
  },
  {
    "desc": "Pre-A轮",
    "id": 20,
    "value": "PRE_A"
  },
  {
    "desc": "A轮",
    "id": 30,
    "value": "A"
  },
  {
    "desc": "A+轮",
    "id": 35,
    "value": "A_PLUS"
  },
  {
    "desc": "Pre-B轮",
    "id": 37,
    "value": "PRE_B"
  },
  {
    "desc": "B轮",
    "id": 40,
    "value": "B"
  },
  {
    "desc": "B+轮",
    "id": 45,
    "value": "B_PLUS"
  },
  {
    "desc": "C轮",
    "id": 50,
    "value": "C"
  },
  {
    "desc": "C+轮",
    "id": 55,
    "value": "C_PLUS"
  },
  {
    "desc": "D轮",
    "id": 60,
    "value": "D"
  },
  {
    "desc": "E轮及以后",
    "id": 70,
    "value": "E"
  },
];

const FUNDS_PHASE_ENUM = extractMeta(FUNDS_PHASE_ENUM_META);

export {
  FUNDS_PHASE_ENUM,
  FUNDS_PHASE_ENUM_META,
};
