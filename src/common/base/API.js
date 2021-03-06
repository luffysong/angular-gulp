import { getService } from './utls';

const METHOD_META = [{
  nameReg: /^(?:update|edit)(.+)$/,
  method: 'PUT',
}, {
  nameReg: /^(?:get|query)(.+)$/,
  method: 'GET',
}, {
  nameReg: /^(?:save|add|create)(.+)$/,
  method: 'POST',
}, {
  nameReg: /^(?:delete|remove)(.+)$/,
  method: 'DELETE',
},
];
function resolveMethod(name) {
  name = name.toLowerCase();
  for (let i = 0, l = METHOD_META.length; i < l; i++) {
    const meta = METHOD_META[i];
    const matches = name.match(meta.nameReg);
    if (matches) {
      return {
        method: meta.method,
        params: {
          action: `${matches[1]}`,
        },
      };
    }
  }

  return {
    method: 'GET',
    params: {
      action: name,
    },
  };
}

function mergeActions(gets, actions) {
  gets.forEach(methodName => {
    actions[methodName] = resolveMethod(methodName);
  });
}

function resolveActions(actions) {
  Object.keys(actions).forEach(key => {
    const action = resolveMethod(key);
    if (angular.isString(actions[key])) {
      action.params.action = actions[key];
      actions[key] = action;
    } else if (!actions[key].method) {
      actions[key].method = action.method;
    }
    if (actions[key].dataType === 'json') {
      actions[key].headers = actions[key].headers || {};
      actions[key].headers['Content-Type'] = 'application/json;charset=UTF-8';
      actions[key].transformRequest = data => angular.toJson(data);
      delete actions[key].dataType;
    }
    if (!actions[key].url) {
      actions[key].params = actions[key].params || {};
      actions[key].params.action = actions[key].action || action.params.action;
    }
  });
}

const ERROR_CODE = {
  SUCCESS: 0,
  NOT_LOGIN: 403,
  FORBIDDEN: 4032,
};
export default class API {

  static ERROR_CODE = ERROR_CODE;

  static fail(code) {
    return code !== ERROR_CODE.SUCCESS;
  }
  API_PATH = `//${location.host}/n/api`;
  constructor(url, getMethods, actions) {
    // 参数调换
    if (!angular.isArray(getMethods)) {
      actions = getMethods;
      getMethods = [];
    }
    if (/^https?:\/\//.test(url)) {
      this.API_PATH = '';
    }
    this.getMethods = getMethods || [];
    this.actions = actions || {};
    this.$q = getService('$q');
    resolveActions(this.actions);
    mergeActions(this.getMethods, this.actions);
    if (url.indexOf(':action') > -1) {
      this.request = getService('$resource')(
        `${this.API_PATH}${url}`,
        null, this.actions);
    } else {
      this.request = getService('$resource')(
        `${this.API_PATH}${url}/:action`,
        null, this.actions);
    }
    this.copyMethod();
  }

  copyMethod() {
    Object.keys(this.actions).forEach((methodName) => {
      this[methodName] = function request(...parameters) {
        let actionOption = { action: methodName };
        if (this.actions[methodName].url) {
          actionOption = {};
        }
        parameters[0] = parameters[0] || {};
        parameters[0] = angular.extend(actionOption,
          this.actions[methodName].params || {},
          parameters[0]);
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

  update(params, data) {
    return this.send('update', params, data);
  }

  save(params, data) {
    return this.send('save', params, data);
  }

  remove(params) {
    return this.send('remove', params);
  }


}
