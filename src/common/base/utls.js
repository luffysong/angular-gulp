export const upyun = {
  apiHost: 'https://v0.api.upyun.com',
  bucket: {
    name: 'krplus-pic',
    host: 'https://pic.36krcnd.com',
    basePath: 'https://pic.36krcnd.com/krplus-pic',
  },
  fileBucket: {
    name: 'krplus-priv',
    host: 'https://krplus-priv.b0.upaiyun.com',
    basePatH: 'https://krplus-priv.b0.upaiyun.com/krplus-priv',
  },
};
export const UPLOAD_TYPE = {
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

  return getService('$http').post('/api/upload/form-api', {
    param: angular.toJson(data),
    type, // UPLOAD_TYPE
  });
}

export function uploadBp(name, file) {
  return getUpToken({
    bucket: upyun.fileBucket.name,
    parttern: `/{year}{mon}/{filemd5}/[${encodeURIComponent(name)}]商业计划书{.suffix}`,
  }, UPLOAD_TYPE.FILE)
  .then(function uploadStart(data) {
    return getService('Upload').upload({
      url: `${upyun.apiHost}/${upyun.fileBucket.name}/`,
      data: data.data,
      file,
      withCredentials: false,
    });
  })
  .then(function setUrl(data) {
    return {
      data: data.data,
      src: `${upyun.fileBucket.host}${data.url}`,
    };
  });
}

export function uploadImage(image, options = {}) {
  return getUpToken(options, UPLOAD_TYPE.PIC)
    .then(function uploadImageStart(data) {
      return getService('Upload').upload({
        url: `${upyun.apiHost}/${upyun.bucket.name}/`,
        data: data.data,
        file: image,
        withCredentials: false,
      });
    })
    .then(function setUrl(data) {
      return {
        data: data.data,
        src: `${upyun.bucket.host}${data.data.url}`,
      };
    });
}

export const slice = Array.prototype.slice;
