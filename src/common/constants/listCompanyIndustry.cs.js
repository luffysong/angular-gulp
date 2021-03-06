import { extractMeta } from '../base/utls';
const LIST_COMPANY_INDUSTRY_META = [
  {"desc":"电商","id":1,"value":"E_COMMERCE"},
  {"desc":"社交","id":2,"value":"SOCIAL_NETWORK"},
  {"desc":"硬件","id":5,"value":"INTELLIGENT_HARDWARE"},
  {"desc":"文娱传媒","id":6,"value":"MEDIA"},
  {"desc":"工具","id":7,"value":"SOFTWARE"},
  {"desc":"消费生活","id":8,"value":"CONSUMER_LIFESTYLE"},
  {"desc":"金融","id":9,"value":"FINANCE"},
  {"desc":"医疗健康","id":10,"value":"MEDICAL_HEALTH"},
  {"desc":"企业服务","id":11,"value":"SERVICE_INDUSTRIES"},
  {"desc":"旅游","id":12,"value":"TRAVEL_OUTDOORS"},
  {"desc":"房产家居","id":13,"value":"PROPERTY_AND_HOME_FURNISHINGS"},
  {"desc":"教育","id":15,"value":"EDUCATION_TRAINING"},
  {"desc":"汽车交通","id":16,"value":"AUTO"},
  {"desc":"物流","id":19,"value":"LOGISTICS"},
  {"desc":"人工智能","id":21,"value":"AI"},
  {"desc":"无人机","id":22,"value":"UAV"},
  {"desc":"机器人","id":23,"value":"ROBOT"},
  {"desc":"VR·AR","id":24,"value":"VR_AR"},
  {"desc":"体育","id":25,"value":"SPORTS"},
  {"desc":"农业","id":26,"value":"FARMING"},
  {"desc":"共享经济","id":43,"value":"SHARE_BUSINESS"},
  {"desc":"出海","id":46,"value":"CHU_HAI"},
  {"desc":"消费升级","id":47,"value":"CONSUME"}
];

const LIST_COMPANY_INDUSTRY = extractMeta(LIST_COMPANY_INDUSTRY_META);

export {
  LIST_COMPANY_INDUSTRY,
  LIST_COMPANY_INDUSTRY_META,
};
