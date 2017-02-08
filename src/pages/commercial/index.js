import commercialController from './commercial.controller';
import commercialService from './commercial.service';

angular.module('@@pages.commercial', [])
  .controller('commercialController', commercialController)
  .service('commercialService', commercialService);

