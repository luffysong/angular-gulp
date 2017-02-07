import krData from 'krData';
import CommercialService from './Commercial.service';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce', '$state', '$q', '$filter', 'ngDialog', 'user')
export default class CommercialController {
  constructor() {
    console.log(1111111);
    this.init();
  }

  commercialService = new CommercialService();

  init() {

  }

  getCommercialInfo() {
    this.commercialService.getCommercialInfo()
    .then(data => {
      this.data = data;
    });
  }

}
