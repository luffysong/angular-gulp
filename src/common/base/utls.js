export function getLoadBundle(page) {
  return function loadBundle($ocLazyLoad) {
    'ngInject';
    return $ocLazyLoad.load(page);
  };
}
let injector = null;
export function getInjector() {
  return injector || (injector = angular.element(document).injector());
}

export function getService(name) {
  return getInjector().get(name);
}

export function extractMeta(from, to) {
  to = to || {};
  from.forEach((item) => {
    to[item.value] = item.value;
  });
  return to;
}

export function getConstantFilterFactory(meta) {
  return function constantFilterFacotry() {
    return function constantFilter(input) {
      return meta.filter(item => item.value === input)[0].desc;
    };
  };
}
export const slice = Array.prototype.slice;
