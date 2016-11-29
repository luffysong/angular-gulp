import { API } from 'krData';

const msgApi = new krData.API('/msg',[], {
  page: {
    action: 'page'
  },
  getUnRead: {
    action: 'has-new-msg'
  }
});


const setMsg = new krData.API('/msg/actions',[], {
  setRead: {
    action: 'mark-read',
    method: 'PUT'
  }
});

@Inject('$q', '$http')
export default class UcService extends API {

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

  /* 获取系统消息 */

  getMsg(obj) {
    return msgApi.page(obj);
  }

  /* 设置已读 */
  setRead(obj) {
    return setMsg.setRead(null,obj);
  }

  getUnRead(obj) {
    return msgApi.getUnRead(obj);
  }

  sendAction(url, callback, error) {
    this.$http.post(url).success(function (data) {
      callback && callback(data);
    }).catch(function (err) {
      error && error(err);
    });
  }
}
