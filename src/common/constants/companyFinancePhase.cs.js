import { extractMeta } from '../base/utls';
const COMPANY_FINANCE_PHASE_META = [
  {
    "desc": "未知轮次",
    "id": -100,
    "value": "UNKNOWN"
  },
  {
    "desc": "战略投资",
    "id": -50,
    "value": "INFORMAL"
  },
  {
    "desc": "新三板",
    "id": -10,
    "value": "NEEQ"
  },
  {
    "desc": "新四板",
    "id": -5,
    "value": "NEW_FOUR_BOARD"
  },
  {
    "desc": "未融资",
    "id": 0,
    "value": "NONE"
  },
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
  {
    "desc": "并购",
    "id": 100,
    "value": "ACQUIRED"
  },
  {
    "desc": "上市",
    "id": 110,
    "value": "IPO"
  },
  {
    "desc": "上市后",
    "id": 120,
    "value": "AFTER_IPO"
  },
];

const COMPANY_FINANCE_PHASE = extractMeta(COMPANY_FINANCE_PHASE_META);

export {
  COMPANY_FINANCE_PHASE,
  COMPANY_FINANCE_PHASE_META,
};
