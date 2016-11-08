import landingIndexController from './landing.controller';
import landingParentController from './landing.parent.controller';
import landingIndexService from './landing.service';

angular.module('@@pages.landing', [])
  .controller('landingIndexController', landingIndexController)
  .controller('landingParentController', landingParentController)
  .service('landingIndexService', landingIndexService);

