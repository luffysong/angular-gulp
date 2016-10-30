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

const SUCCESS = 0;
const FAILED = 1;
// 上传类型
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

// 获取angular中的服务
export function getService(name) {
  return (getService.injector || getInjector()).get(name);
}

// 提取标准的服务端字典
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
      if(!input)return;
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
    pattern: `/{year}{mon}/{filemd5}/[${encodeURIComponent(name)}]商业计划书{.suffix}`,
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
      src: `${upyun.fileBucket.host}${data.data.url}`,
    };
  });
}

export function login(url) {
  url = url || location.href;
  url = encodeURIComponent(url);
  /* eslint-disable */
  setTimeout(() => {
    location.href = `https://passport.36kr.com/pages/?ok_url=${url}`;
  }, 100);
  /* eslint-enable */
}

export function validateBP(file) {
  const MAX_SIZE = 7.5 * 1024 * 1024;
  const suffixReg = /.pdf$/;
  if (!suffixReg.test(file.name)) {
    return {
      valid: false,
      msg: 'BP文件必须是PDF格式',
    };
  }
  if (file.size > MAX_SIZE) {
    return {
      valid: false,
      msg: 'BP文件不能超过7.5M',
    };
  }
  return {
    valid: true,
  };
}

export function validateImage(file) {
  const MAX_SIZE = 2 * 1024 * 1024;
  const suffixReg = /\.gif|\.png|\.jpg$/i;
  if (!suffixReg.test(file.name)) {
    return {
      code: FAILED,
      valid: false,
      msg: '图片文件必须是PNG,JPG,GIF格式',
    };
  }
  if (file.size > MAX_SIZE) {
    return {
      valid: false,
      code: FAILED,
      msg: '图片文件不能超过2M',
    };
  }
  return {
    code: SUCCESS,
    valid: true,
  };
}

export function uploadImage(image, options = {}) {
  const validateObj = validateImage(image);
  if (validateObj.code === FAILED) {
    return getService('$q').reject(validateObj);
  }
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


export function mapProps(arr, from, to = {}, isReverse) {
  if (angular.isUndefined(from)) {
    throw new Error('mapError: data source is undefined');
  }
  let fromIndex = 0;
  let toIndex = 1;
  if (to === true || isReverse === true) {
    isReverse = true;
    to = to || {};
    fromIndex = 1;
    toIndex = 0;
  }
  arr.forEach(key => {
    const keys = key.split(':');
    to[keys[toIndex] || keys[fromIndex]] = from[keys[fromIndex] || keys[toIndex]];
  });
  return to;
}

export function deleteProps(arr, obj) {
  arr.forEach(key => delete obj[key]);
}

export function removeProps(arr, obj) {
  deleteProps(arr, obj);
}


export function fromYear(year) {
  let nowYear = new Date().getFullYear();
  const years = [];
  if (year > nowYear) {
    throw new Error('年份超过当前时间');
  }
  years.push(nowYear);
  while (--nowYear >= year) {
    years.push(nowYear);
  }
  return years;
}

//  获取月份
export function getMonth(month) {
  const months = [];
  for (let i = 1; i <= month; i++) {
    if (i < 10) {
      i = `0${i}`;
    }
    months.push(i);
  }
  return months;
}

export const slice = Array.prototype.slice;
