/* eslint-disable no-extra-bind */

import Alert from './Alert.js';
const API_CODE = {
  SUCCESS: 0,
  NOT_LOGIN: 403,
};
@Inject('$q')
export default class CommonInterceptor {
  response = ((response) => {
    if (angular.isUndefined(response.data.code) ||
      response.config.url.indexOf('v0.api.upyun.com') > -1
    ) {
      return response;
    }
    const resCopy = angular.copy(response);
    const code = response.data.code;
    if (code !== API_CODE.SUCCESS) {
      if (code === API_CODE.NOT_LOGIN) {
        Alert.alert({ message: `此处目前是调试信息：${response.config.url}
          不允许未登录用户访问\n 错误信息：${response.data.msg}`,
          duration: 5000,
        });
      }
      return this.$q.reject(response.data);
    }

    resCopy.data = resCopy.data.data;
    return resCopy;
  }).bind(this);
}

