import vendor from './config/vendor';
import set from './config/set';
import buildTemplates from './angular-templates';
import scripts, { babelHelper, concatTemplate, copyLib } from './scripts';
import style from './style';

const prod = {
  cdn: '',
};

const jsplugins = [

];

const proxyConfig = {
  proxy: [
    {
      path: '/api',
      target: '//rongtest01.36kr.com',
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
