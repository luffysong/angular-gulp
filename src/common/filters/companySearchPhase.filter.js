/* eslint-disable */
import { getConstantFilterFactory } from '../base/utls';
const COMPANY_SEARCH_PHASE = [
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
"desc": "D轮",
"id": 60,
"value": "D"
},
{
"desc": "E轮及以后",
"id": 70,
"value": "E"
}
];
export  {
  COMPANY_SEARCH_PHASE
}
export default getConstantFilterFactory(COMPANY_SEARCH_PHASE);