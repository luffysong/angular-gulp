import _ from 'lodash';
let debug = process.env.debug;
let prod = process.env.prod;
let zhost = process.env.zhost;
let ucHost = null;
let ucBasic = null;
let zHost = null;
/* eslint-disable */
debug = _.isUndefined(debug) ? true : JSON.parse(debug);
prod = _.isUndefined(prod) ? false : JSON.parse(prod);
zhost = _.isUndefined(zhost) ? false : JSON.parse(zhost);

if (!zhost) {
  ucHost = 'https://uctest01.36kr.com';
  zHost = 'https://ztest01.36kr.com';
  ucBasic = `${ucHost}/#/uc/account/basic`
} else {
  ucHost = 'https://uc.36kr.com';
  zHost = 'https://z.36kr.com';
  ucBasic = `${ucHost}/#/uc/account/basic`;
}

/* eslint-enable */
export default {
  app: 'krData',
  pages: 'krData.pages',
  ucHost,
  ucBasic,
  zHost,
  debug,
  prod,
};
