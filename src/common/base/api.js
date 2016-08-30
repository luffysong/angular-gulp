/* eslint-disable no-alert */
import { getService } from './utls';
export default class API {

  domain=1;
  constructor() {
    this.$http = getService('$http');
    this.$q = getService('$q');
    this.$resource = getService('$resource');
  }

  get() {
  }

  delete() {
  }

  query() {
  }

  put() {
  }

  post() {
  }
}
