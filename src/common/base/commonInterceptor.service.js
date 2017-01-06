/* eslint-disable no-extra-bind */
const API_CODE = {
  SUCCESS: 0,
  NOT_LOGIN: 403,
};
@Inject('$q', '$log')
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
        this.$log.debug(`${response.config.url}错误信息：${response.data.msg}`);
      }
      return this.$q.reject(response.data);
    }

    resCopy.data = resCopy.data.data;
    return resCopy;
  }).bind(this);
}

