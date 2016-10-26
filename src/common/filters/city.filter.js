/* eslint-disable */
const CITY_META = [
{
"dispOrder": 5008,
"feature": 1,
"id": 101,
"name": "北京市",
"parentId": 0
},
{
"dispOrder": 5007,
"feature": 1,
"id": 109,
"name": "上海市",
"parentId": 0
},
{
"dispOrder": 5002,
"feature": 0,
"id": 102,
"name": "天津市",
"parentId": 0
},
{
"dispOrder": 5001,
"feature": 0,
"id": 90000,
"name": "海外",
"parentId": 0
},
{
"dispOrder": 5000,
"feature": 0,
"id": 122,
"name": "重庆市",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 112,
"name": "安徽省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 134,
"name": "澳门",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 113,
"name": "福建省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 128,
"name": "甘肃省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 119,
"name": "广东省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 120,
"name": "广西",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 124,
"name": "贵州省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 121,
"name": "海南省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 103,
"name": "河北省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 116,
"name": "河南省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 108,
"name": "黑龙江省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 117,
"name": "湖北省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 118,
"name": "湖南省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 107,
"name": "吉林省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 110,
"name": "江苏省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 114,
"name": "江西省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 106,
"name": "辽宁省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 105,
"name": "内蒙古",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 130,
"name": "宁夏",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 129,
"name": "青海省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 115,
"name": "山东省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 104,
"name": "山西省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 127,
"name": "陕西省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 123,
"name": "四川省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 132,
"name": "台湾省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 126,
"name": "西藏",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 133,
"name": "香港",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 131,
"name": "新疆",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 125,
"name": "云南省",
"parentId": 0
},
{
"dispOrder": 0,
"feature": 0,
"id": 111,
"name": "浙江省",
"parentId": 0
}
];

let CITY_OBJECT = {};
CITY_META.forEach((item) => {
  CITY_OBJECT[item.id] = item.name;
})

export default function cityFilterFactory() {
  return function cityFilter(input) {
    return CITY_OBJECT[input];
  };
}
