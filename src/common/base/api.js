/* eslint-disable no-alert */
import { getService, slice } from './utls';

function mergeActions(gets, actions) {
  gets.forEach(methodName => {
    actions[methodName] = {
      params: {
        action: methodName,
      },
    };
  });
}
export default class API {

  API_PATH = `//${location.host}/api`;
  constructor(url, getMethods, actions) {
    // 参数调换
    if (!angular.isArray(getMethods)) {
      actions = getMethods;
      getMethods = [];
    }
    this.getMethods = getMethods || [];
    this.actions = actions || {};
    this.$q = getService('$q');
    mergeActions(this.getMethods, this.actions);
    this.request = getService('$resource')(`${this.API_PATH}${url}/:action`, null, this.actions);
    this.copyMethod();
  }

  copyMethod() {
    Object.keys(this.actions).concat(this.getMethods).forEach((methodName) => {
      this[methodName] = function request() {
        const parameters = slice.call(arguments, 0);
        parameters[0] = parameters[0] || {};
        parameters[0] = angular.extend({ action: methodName }, parameters[0]);
        return this.request[methodName](...parameters).$promise;
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
