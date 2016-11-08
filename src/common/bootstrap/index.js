import '../routes/index';
import '../constants/index';
import '../filters/index';
import '../components/index.js';
import '../services/index.js';
import assets from '../assets/script.js';
import { INDUSTRY_META } from '../filters/industry.filter';
import commonInterceptor from '../base/commonInterceptor.service';
import { getService, fromYear, getMonth } from '../base/utls';
import SearchService from '../services/Search.service.js';
const root = {};
/* eslint-disable no-param-reassign,no-use-before-define,angular/on-watch */
angular.module('@@app', ['@@app.routes', '@@app.components',
  'cgNotify', 'MassAutoComplete', 'ngSanitize', 'perfect_scrollbar',
  '@@app.constants', 'ngResource', '@@app.filters', '@app.services', 'dibari.angular-ellipsis',
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
      email: function emialValidator(value) {
        // return value ? /^http[s]?:\/\/[^/]+/.test(value) : true;
        /* eslint-disable */
        return value ? /^([a-zA-Z0-9]+[_|_|\.|\+]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value) : true;
        /* eslint-enable */
      },
      integer: value => (value ? /\d+$/.test(value) : true),
      number: value => (value ? /^\d*(\.\d+)?$/.test(value) : true),
      maxlength: (value, scope, element, attrs, param) => {
        param = parseInt(param, 10) || 0;
        return value ? value.length <= param : true;
      },
      minlength: (value, scope, element, attrs, param) => {
        param = parseInt(param, 10) || 0;
        return value ? value.length >= param : true;
      },
      phoneExp: value => {
        return /\d{11}/.test(value);
      }
    }).setDefaultMsg({
      notEqual: {},
      required: {},
      minlength: {},
      maxlength: {},
      email: {
        error: '请输入合法的邮箱地址',
      },
      phoneExp: {
        error: '手机号码格式错误'
      },
      number: {},
      integer: {},
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
  .run(function run($rootScope) {
    $rootScope.$on('$stateChangeSuccess',
      function $stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
        root.fromParams = fromParams;
        root.toParams = toParams;
        root.toState = toState;
        root.fromState = fromState;
      });
  })
  .run(function run($rootScope, $location, $injector, user,
    OPERATION_STATUS_META, COMPANY_NEWS_META, FINANCE_PHASE_META,
    CURRENCY_UNIT_META, ROLE_META, FINANCE_NEED_META, PROJECT_TYPE_META, FUNDS_PHASE_ENUM_META,
    COMPANY_SEARCH_PHASE_META, COMPANY_INDUSTRY_META, INVESTOR_ROLE_META) {
    getService.injector = $injector;
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
      '50-100人',
      '150-500人',
      '500-1000人',
      '1000人以上',
    ];
    root.COMPANY_NEWS_META = COMPANY_NEWS_META;
    root.FINANCE_PHASE_META = FINANCE_PHASE_META;
    root.CURRENCY_UNIT_META = CURRENCY_UNIT_META;
    root.COMPANY_SEARCH_PHASE_META = COMPANY_SEARCH_PHASE_META;
    root.COMPANY_INDUSTRY_META = COMPANY_INDUSTRY_META;
    root.INVESTOR_ROLE_META = INVESTOR_ROLE_META;
    const searchInstance = new SearchService();
    root.autocompleteOptions = searchInstance.getSearchAutoCompleteOptions();
    root.searchRecord = searchInstance.searchRecord.bind(searchInstance);
    root.onClick = searchInstance.onClickRow.bind(searchInstance);
    root.searchOut = {};
    root.assets = assets;
    root.user = user;
    $rootScope.root = root;
  });
angular.bootstrap(document, ['@@app'], { strictDi: true });
