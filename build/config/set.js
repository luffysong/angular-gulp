import _ from 'lodash';
let debug = process.env.debug;
let prod = process.env.prod;
/* eslint-disable */
debug = _.isUndefined(debug) ? true : JSON.parse(debug);
prod = _.isUndefined(prod) ? false : JSON.parse(prod);
/* eslint-enable */
export default {
  app: 'krData',
  pages: 'krData.pages',
  debug,
  prod,
};
