import CommercialController from './Commercial.controller';
import CommercialService from './Commercial.service';

angular.module('@@pages.commercial', [])
  .controller('CommercialController', CommercialController)
  .service('CommercialService', CommercialService);

