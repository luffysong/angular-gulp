import '../routes/index';
import '../constants/index';
import '../filters/index';
import commonInterceptor from '../base/commonInterceptor';
import { getService } from '../base/utls';
/* eslint-disable no-param-reassign,no-use-before-define */
angular.module('@@app', ['@@app.routes',
  '@@app.constants', 'ngResource', '@@app.filters',
  'validation', 'validation.rule',
]);
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
  })
  .config(function sameValidate($validationProvider) {
    $validationProvider.setExpression({
      notEqual: function sameName(value, scope, element, attrs, param) {
        const getter = getService('$parse')(param);
        return value !== getter(scope);
      },
      http: function httpValidator(value) {
        return /^http:\/\/[^/]+/.test(value);
      },
    }).setDefaultMsg({
      notEqual: {},
      required: {},
      minlength: {},
      maxlength: {},
      http: {
        error: '请以http://开头',
      },
    });
  });
angular.bootstrap(document, ['@@app'], { strictDi: true });
