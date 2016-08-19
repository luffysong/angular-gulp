import vendor from './config/vendor';
import set from './config/set';
import buildTemplates from './angular-templates';
import scripts, { babelHelper } from './scripts';
import style from './style';

const prod = {
  cdn: 'https://cdn/',
};
export {
  vendor,
  set,
  buildTemplates,
  scripts,
  babelHelper,
  prod,
  style,
};
