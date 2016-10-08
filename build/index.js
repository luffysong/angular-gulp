import vendor from './config/vendor';
import set from './config/set';
import buildTemplates from './angular-templates';
import scripts, { babelHelper, concatTemplate, copyLib } from './scripts';
import style from './style';

const prod = {
  cdn: '',
};

const jsplugins = [
  '/bower/ngSticky/dist/sticky.min.js',
  '/bower/angular-scroll/angular-scroll.min.js',
  '/bower/angular-clamp/ng-clamp.js',
  '/local_lib/angular-mass-autocomplete/massautocomplete.min.js',
];

const proxyConfig = {
  proxy: [
    {
      path: '/api',
      target: 'http://nrongtest03.36kr.com',
    },
  ],
};
export {
  proxyConfig,
  vendor,
  set,
  buildTemplates,
  scripts,
  babelHelper,
  concatTemplate,
  copyLib,
  jsplugins,
  prod,
  style,
};
