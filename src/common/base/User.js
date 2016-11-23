import { login, getService } from '../base/utls.js';
@Inject('$http', '$q')
export default class User {

  data = {};
  promise;
  constructor() {
    this.init();
  }

  static getUserInfo() {
    return getService('$http').get('/n/api/user')
    .then(data => data.data);
  }

  init() {
    this.promise = this.$http.get('/n/api/user')
      .then(data => {
        data = data.data;
        this.loaded = true;
        this.isLogin = true;
        angular.extend(this.data, data);
      }).catch(() => {
        this.isLogin = false;
      }).finally(() => {
        this.loaded = true;
      });
  }

  then(then, fail) {
    return this.promise.then(then, fail);
  }

  catch(fn) {
    return this.then(null, fn);
  }

  ensureLogin() {
    if (this.loaded && !this.isLogin) {
      login();
    } else {
      this.catch(() => login());
    }
  }

  isLoaded() {
    return this.loaded;
  }

  notInvestor() {
    return this.isLogin && !this.isInvestor();
  }
  isInvestor() {
    return this.data.investorType < 100;
  }

  getMsg(obj) {
    return this.$http.get('/n/api/msg/has-new-msg?'+$.param(obj));
  }
}
