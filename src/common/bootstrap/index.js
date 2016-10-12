import '../routes/index';
import '../constants/index';
import '../filters/index';
import { INDUSTRY_META } from '../filters/industry.filter';
import commonInterceptor from '../base/commonInterceptor.service';
import { getService, fromYear, getMonth } from '../base/utls';
/* eslint-disable no-param-reassign,no-use-before-define */
angular.module('@@app', ['@@app.routes',
  'cgNotify',
  '@@app.constants', 'ngResource', '@@app.filters',
  'validation', 'validation.rule',
]);
angular.module('@@app').service('commonInterceptor', commonInterceptor)
  .config(function configHttp($httpProvider) {
    $httpProvider.interceptors.push('commonInterceptor');
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.transformRequest = param;
    $httpProvider.useLegacyPromiseExtensions(true);
    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    $httpProvider.defaults.headers.put = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    function param(data) {
      if (angular.isUndefined(data)) return data;
      if (!angular.isObject(data)) return data;
      const clonedData = angular.copy(data);
      let k;
      for (k in clonedData) {
        if (k.indexOf('$') === 0) {
          delete clonedData[k];
        }
      }
      return $.param(clonedData);
    }
  })
  .config(function configResource($resourceProvider) {
    $resourceProvider.defaults.actions.update = {
      method: 'PUT',
    };
  })
  .config(function sameValidate($validationProvider) {
    $validationProvider.setExpression({
      notEqual: function sameName(value, scope, element, attrs, param) {
        const getter = getService('$parse')(param);
        return value !== getter(scope);
      },
      http: function httpValidator(value) {
        return value ? /^http[s]?:\/\/[^/]+/.test(value) : true;
      },
    }).setDefaultMsg({
      notEqual: {},
      required: {},
      minlength: {},
      maxlength: {},
      email: {},
      number: {},
      http: {
        error: '请以http(s)://开头',
      },
    });
  })
  .run(function run(notify) {
    notify.config({
      duration: 2000,
    });
  })
  .run(function run($rootScope, OPERATION_STATUS_META, COMPANY_NEWS_META, FINANCE_PHASE_META,
    CURRENCY_UNIT_META, ROLE_META, FINANCE_NEED_META, PROJECT_TYPE_META, FUNDS_PHASE_ENUM_META) {
    const root = {};
    root.fromYear2000 = fromYear(2000);
    root.getAllMonths = getMonth(12);
    root.OPERATION_STATUS_META = OPERATION_STATUS_META;
    root.INDUSTRY_META = INDUSTRY_META;
    root.ROLE_META = ROLE_META;
    root.FINANCE_NEED_META = FINANCE_NEED_META;
    root.FUNDS_PHASE_ENUM_META = FUNDS_PHASE_ENUM_META;
    root.PROJECT_TYPE_META = PROJECT_TYPE_META;
    root.SCALES_META = [
      '少于50人',
      '100-500人',
      '500-1000人',
      '1000人以上',
    ];
    root.COMPANY_NEWS_META = COMPANY_NEWS_META;
    root.FINANCE_PHASE_META = FINANCE_PHASE_META;
    root.CURRENCY_UNIT_META = CURRENCY_UNIT_META;
    $rootScope.root = root;
  });
angular.bootstrap(document, ['@@app'], { strictDi: true });
