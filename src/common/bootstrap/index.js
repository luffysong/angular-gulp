import '../routes/index';
import '../constants/index';
import '../filters/index';
import '../components/index.js';
import '../services/index.js';
import assets from '../assets/script.js';
import { INDUSTRY_META } from '../filters/industry.filter';
import commonInterceptor from '../base/commonInterceptor.service';
import { getService, fromYear, getMonth } from '../base/utls';
import phantom from '../base/phantom';

// SEO 禁止phantom立即渲染，等待回调渲染
phantom.stopAutoRender([
  /^$|^\/$/,
  /^\/project\/\d+/,
  /^\/list\/detail/,
  /^\/org\/list/,
  /^\/org\/\d+/,
  /^\/investor\/list/,
  /^\/investor\/\d+/,
]);
const root = {};
/* eslint-disable no-param-reassign,angular/on-watch */
angular.module('@@app', ['@@app.routes', '@@app.components',
  'cgNotify', 'MassAutoComplete', 'ngSanitize', 'perfect_scrollbar',
  '@@app.constants', 'ngResource', '@@app.filters', '@app.services', 'dibari.angular-ellipsis',
  'validation', 'validation.rule', 'ksSwiper',
]);
angular.module('@@app').service('commonInterceptor', commonInterceptor)
  .config(function debugMode($logProvider) {
    $logProvider.debugEnabled(window.KR_ENV.debug);
  })
  .config(function configHttp($httpProvider) {
    $httpProvider.interceptors.push('commonInterceptor');
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.transformRequest = param;
    const defaultTransformResponse = $httpProvider.defaults.transformResponse[0];
    const httpImageReg = /http:\/\/krplus-pic/g;
    $httpProvider.defaults.transformResponse = [
      tRes,
      defaultTransformResponse,
    ];
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

    function tRes(data) {
      return data && data.replace(httpImageReg, 'https://krplus-pic');
    }

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
      return $.param(clonedData, true);
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
        return value ?
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) :
          true;
        /* eslint-enable */
      },
      integer: value => (value ? /^(?:[1-9]\d*|0)$/.test(value) : true),
      number: value => (value ? /^\d*(\.\d+)?$/.test(value) : true),
      maxlength: (value, scope, element, attrs, param) => {
        param = parseInt(param, 10) || 0;
        return value ? value.length <= param : true;
      },
      minlength: (value, scope, element, attrs, param) => {
        param = parseInt(param, 10) || 0;
        return value ? value.length >= param : true;
      },
      phoneExp: value => /^1[34578]\d{9}$/.test(value) || /^233\d{8}$/.test(value),
    }).setDefaultMsg({
      notEqual: {},
      required: {},
      minlength: {},
      maxlength: {},
      email: {
        error: '请输入合法的邮箱地址',
      },
      phoneExp: {
        error: '手机号码格式错误',
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
  .run(function safeMoudle($injector) {
    const module = angular.module;
    angular.module = (...moduleArgs) => {
      const moduleInstance = module(...moduleArgs);
      ['directive', 'filter', 'service'].forEach(methodName => {
        const api = moduleInstance[methodName].bind(moduleInstance);
        const suffix = methodName.charAt(0).toUpperCase() + methodName.slice(1);
        moduleInstance[methodName] = (name, factory) => {
          let cacheName = name;
          if (methodName !== 'service') {
            cacheName += suffix;
          }
          if (!$injector.has(cacheName)) {
            api(name, factory);
          }
          return moduleInstance;
        };
      });
      return moduleInstance;
    };
  })
  .run(function run($rootScope, $location, $document, $window) {
    /* 全局PageView埋点统计事件触发*/

    const $progressbar = $document.find('.progress-global-bar');
    // 如果在phantom中渲染
    if (phantom.inPhantom) {
      $progressbar.remove();
    }
    $progressbar.on('transitionend', function ontransitionend(e) {
      // 兼容Edge浏览器，Edge浏览器下elapsedTime为一个浮点数
      const PROGRESS_END_ELAPSEDX10 = 4;
      if (parseInt(e.originalEvent.elapsedTime * 10, 10) === PROGRESS_END_ELAPSEDX10) {
        this.classList.remove('progress-end');
        this.classList.remove('progress-start');
      }
    });
    $rootScope.$on('$locationChangeStart', () => {
      $window.krtracker('trackPageView', $location.url());
    });
    $rootScope.$on('$stateChangeStart', () => {
      $progressbar.addClass('progress-start');
    });
    $rootScope.$on('$stateChangeSuccess',
      function $stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
        $progressbar.addClass('progress-end');
        root.fromParams = fromParams;
        root.toParams = toParams;
        root.toState = toState;
        root.fromState = fromState;
      });
  })
  .run(function run($rootScope, $location, $injector, user,
    OPERATION_STATUS_META, COMPANY_NEWS_META, FINANCE_PHASE_META,
    CURRENCY_UNIT_META, ROLE_META, FINANCE_NEED_META, PROJECT_TYPE_META, FUNDS_PHASE_ENUM_META,
    COMPANY_SEARCH_PHASE_META, COMPANY_INDUSTRY_META, INVESTOR_ROLE_META, FOLLOW_AREA_META,
    LIST_COMPANY_INDUSTRY_META, ORG_INDUSTRY_META) {
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
    root.LIST_COMPANY_INDUSTRY_META = LIST_COMPANY_INDUSTRY_META;
    root.INVESTOR_ROLE_META = INVESTOR_ROLE_META;
    root.FOLLOW_AREA_META = FOLLOW_AREA_META;
    root.ORG_INDUSTRY_META = ORG_INDUSTRY_META;

    // 全局共享assets
    root.assets = assets;

    // 全局共享user
    root.user = user;

    // 环境变量
    root.KR_ENV = getService('$window').KR_ENV;
    $rootScope.root = root;
  });
angular.bootstrap(document, ['@@app'], { strictDi: true });
