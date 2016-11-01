import organizationIndexController from './organization.controller';
import organizationParentController from './organization.parent.controller';
import introFormat from './introFormat.filter';
import organizationService from './organization.service.js';

angular.module('@@pages.organization', [])
  .controller('organizationIndexController', organizationIndexController)
  .controller('organizationParentController', organizationParentController)
  .filter('introFormat',introFormat)
  .service('organizationService', organizationService);
