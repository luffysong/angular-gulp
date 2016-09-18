/* eslint-disable no-alert */
import { getService, slice } from './utls';
export default class API {

  API_PATH = `//${location.host}/api`;
  constructor(url, actions) {
    this.$q = getService('$q');
    this.request = getService('$resource')(`${this.API_PATH}/${url}/:action`, actions);
    this.actions = actions || {};
  }

  copyMethod(actions) {
    Object.keys(actions).forEach((methodName) => {
      this[methodName] = () => {
        const parameters = slice.call(arguments, 0);
        return this.request.apply(this.request, parameters).$promise;
      };
    });
  }


  send(method, params, data) {
    return this.request[method](params, data).$promise;
  }

  get(params) {
    return this.send('get', params);
  }
  query(params) {
    return this.send('query', params);
  }

  put(params, data) {
    return this.send('put', params, data);
  }

  post(params, data) {
    return this.send('post', params, data);
  }

  remove(params) {
    return this.send('get', params);
  }


}
