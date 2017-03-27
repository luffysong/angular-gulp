import organizationIndexController from './organization.controller';
import organizationParentController from './organization.parent.controller';
import organizationPageController from './organization.page.controller';
import orgIntroFormat from './orgIntroFormat.filter';
import organizationService from './organization.service.js';

angular.module('@@pages.organization', [])
  .controller('organizationIndexController', organizationIndexController)
  .controller('organizationParentController', organizationParentController)
  .controller('organizationPageController', organizationPageController)
  .filter('orgIntroFormat',orgIntroFormat)
  .service('organizationService', organizationService);
