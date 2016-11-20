import vendor from './config/vendor';
import set from './config/set';
import buildTemplates from './angular-templates';
import scripts, { babelHelper, concatTemplate, copyLib } from './scripts';
import style from './style';

const prod = {
  cdn: process.env.cdn ? '//sta.36krcnd.com/krplus' : '',
};

const jsplugins = [
  '/bower/ngSticky/dist/sticky.min.js',
  '/bower/ng-dialog/js/ngDialog.min.js',
  '/bower/ng-dialog/css/ngDialog.min.css',
  '/bower/ng-dialog/css/ngDialog-theme-default.min.css',
  '/bower/angular-scroll/angular-scroll.min.js',
  '/bower/angular-clamp/ng-clamp.js',
  '/bower/ng-file-upload/ng-file-upload-all.min.js',
  '/bower/jQuery.dotdotdot/src/jquery.dotdotdot.js',
  '/bower/highcharts/highcharts.js',
  '/bower/highcharts-ng/dist/highcharts-ng.min.js',
  '/local_lib/angular-mass-autocomplete/massautocomplete.js',
  '/bower/ng-file-upload/ng-file-upload-all.min.js',
  '/bower/angular-tooltips/dist/angular-tooltips.js',
  '/bower/angular-tooltips/dist/angular-tooltips.css',
  '/bower/qrcode-generator/js/qrcode.js',
  '/bower/angular-qrcode/angular-qrcode.js',
  '/local_lib/slick-carousel/slick/slick.min.js',
  '/local_lib/slick-carousel/slick/slick.css',
  '/local_lib/angular-slick/dist/slick.js',
  '/bower/checklist-model/checklist-model.js',
  /*'/bower/ng-parallax/angular-parallax.min.js',*/
  '/local_lib/parallax/parallax.min.js'
];

const proxyConfig = {
  proxy: [
    {
      path: '/n/api',
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
