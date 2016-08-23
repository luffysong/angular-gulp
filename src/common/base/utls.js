export function getLoadBundle(page) {
  return function loadBundle($ocLazyLoad) {
    'ngInject';
    return $ocLazyLoad.load(page);
  };
}

