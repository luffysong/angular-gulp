import ResolveData from '../base/resolveData.service.js';
import User from '../base/User.js';
angular.module('@app.services', [])
  .service('user', User)
  .service('resolveData', ResolveData);
