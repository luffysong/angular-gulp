import _ from 'lodash';
let debug = process.env.debug;
let prod = process.env.prod;
let online = process.env.prod;
let ucHost = null;
let ucBasic = null;
/* eslint-disable */
debug = _.isUndefined(debug) ? true : JSON.parse(debug);
prod = _.isUndefined(prod) ? false : JSON.parse(prod);
online = _.isUndefined(online) ? false : JSON.parse(online);


if (!online) {
  ucHost = 'https://uctest01.36kr.com';
  ucBasic = `${ucHost}/#/uc/account/basic`
} else {
  ucHost = 'https://uc.36kr.com';
  ucBasic = `${ucHost}/#/uc/account/basic`
}

/* eslint-enable */
export default {
  app: 'krData',
  pages: 'krData.pages',
  ucHost,
  ucBasic,
  debug,
  prod,
};
