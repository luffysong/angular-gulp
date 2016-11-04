import { API } from 'krData';

@Inject('$q')
export default class ProjectService extends API {

  constructor() {
    super('/user/:id', [
      'company',
      // 'addfinance',
    ], {
    });
  }
  // 获取当前登录用户
  getUser() {
    return  new API('/user/fullinfo').get();
  }

  getCompany() {
    return  new API('/user/company').get()
      .then(data => {
        return {
          MEMBER: data.MEMBER || [],
          START_UP_MEMBER: data.START_UP_MEMBER || [],
          MEMBER_limit: 5,
          START_UP_MEMBER_limit: 5,
        }
      });
  }
  setAutoreply(type, val) {
    return new API(`/user/autoreply/${type}`).update(null, {
      flag: val
    });
  }
  // 设置接收BP的邮箱
  addBPEmail(val) {
    const email = {
      email: val,
    };
    return new API('/investor/common-email')
      .update(null, email);
  }
}
