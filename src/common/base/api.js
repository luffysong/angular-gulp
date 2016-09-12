/* eslint-disable no-alert */
import { getService } from './utls';
export default class API {

  domain = '//';
  constructor(config) {
    this.$http = getService('$http');
    this.$q = getService('$q');
    this.request = getService('$resource');
    this.config = config;
  }


  send(config) {
    this.config = config;
  }

  get(config) {
    return this.send(config);
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
