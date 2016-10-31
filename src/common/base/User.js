import { login, getService } from '../base/utls.js';
@Inject('$http')
export default class User {

  data = {};
  constructor() {
    this.init();
  }

  static getUserInfo () {
    return getService('$http').get('/api/user')
    .then(data => data.data);
  }

  init() {
    this.$http.get('/api/user')
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

  ensureLogin() {
    if (this.loaded && !this.isLogin) {
      login();
    }
  }

  isLoaded() {
    return this.loaded;
  }

  isInvestor() {
    return this.data.investorType < 100;
  }

}
