@Inject('$q')
export default class CommonInterceptor {
  response(response) {
    if (angular.isUndefined(response.data.code)) {
      return response;
    }
    const resCopy = angular.extend({}, response);
    if (response.data.code !== 0) {
      if (response.data.code === 4032) {
        location.href = '/#/fail/forbidden';
      }
      return this.$q.reject(response.data);
    }

    resCopy.data = resCopy.data.data;
    return resCopy;
  }
}
