import ResolveData from '../base/resolveData.service';
import User from '../base/User.js';
import SeoService from './Seo.service';
angular.module('@app.services', [])
  .service('user', User)
  .service('seoService', SeoService)
  .service('resolveData', ResolveData);
