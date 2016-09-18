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

export const slice = Array.prototype.slice;
