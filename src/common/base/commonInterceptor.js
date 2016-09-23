/* eslint-disable no-extra-bind */
@Inject('$q')
export default class CommonInterceptor {
  response = ((response) => {
    if (angular.isUndefined(response.data.code) ||
      response.config.url.indexOf('v0.api.upyun.com') > -1
    ) {
      return response;
    }
    const resCopy = angular.copy(response);
    if (response.data.code !== 0) {
      return this.$q.reject(response.data);
    }

    resCopy.data = resCopy.data.data;
    return resCopy;
  }).bind(this);
}

