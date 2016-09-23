export const upyun = {
  api: '//v0.api.upyun.com',
  bucket: {
    name: 'krplus-pic',
    url: 'https://pic.36krcnd.com',
  },
  fileBucket: {
    name: 'krplus-priv',
    url: 'http://krplus-priv.b0.upaiyun.com',
  },
};
const UPLOAD_TYPE = {
  FILE: 'file',
  PIC: 'pic',
};
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

export function getUpToken(options, type) {
  const data = angular.extend({}, {
    bucket: upyun.bucket.name,
    expiration: parseInt((new Date().getTime() + (3600 * 1000 * 24 * 365)) / 1000, 10),
    'save-key': options.pattern || '/{year}{mon}/{day}{hour}{min}{sec}/{random}{.suffix}',
  }, options);

  return getService('$http').post('/api/upload/form-api',angular.toJson({
    param: angular.toJson(data),
    type, // UPLOAD_TYPE
  }));
}

export function uploadBp(name, file) {
  return getUpToken({
    bucket: upyun.fileBucket.name,
    parttern: `/{year}{mon}/{filemd5}/[${encodeURIComponent(name)}]商业计划书{.suffix}`,
  }, UPLOAD_TYPE.FILE)
  .then(function uploadStart(data) {
    return getService('Upload').upload({
      url: `${upyun}/${upyun.fileBucket.name}/`,
      data,
      file,
      withCredentials: false,
    });
  }).then(null, null, function progress(evt) {
    console.log(evt);
  });
}

export const slice = Array.prototype.slice;
