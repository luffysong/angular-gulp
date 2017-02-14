import commercialIndexController from './commercialIndex.controller';
import CommercialService from './Commercial.service';

angular.module('@@pages.commercialIndex', [])
  .controller('commercialIndexController', commercialIndexController)
  .service('CommercialService', CommercialService);

