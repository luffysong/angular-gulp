import '../routes/index';
import '../constants/index';
import '../filters/index';
import commonInterceptor from '../base/commonInterceptor';
/* eslint-disable no-param-reassign,no-use-before-define */
angular.module('@@app', ['@@app.routes', '@@app.constants', 'ngResource', '@@app.filters']);
angular.module('@@app').service('commonInterceptor', commonInterceptor)
  .config(function configHttp($httpProvider) {
    $httpProvider.interceptors.push('commonInterceptor');
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.transformRequest = delete$;

    function delete$(data) {
      if (angular.isUndefined(data)) return data;
      if (!angular.isObject(data)) return data;
      const clonedData = angular.copy(data);
      let k;
      for (k in clonedData) {
        if (k.indexOf('$') === 0) {
          delete clonedData[k];
        }
      }
      return clonedData;
    }
  });
angular.bootstrap(document, ['@@app'], { strictDi: true });
