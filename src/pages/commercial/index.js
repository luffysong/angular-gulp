import commercialIndexController from './commercialIndex.controller';
import commercialService from './commercial.service';

angular.module('@@pages.commercialIndex', [])
  .controller('commercialIndexController', commercialIndexController)
  .service('commercialService', commercialService);

