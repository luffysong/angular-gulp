import krData from 'krData';
import CommercialService from './Commercial.service';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce',
 '$state', '$q', '$filter', 'ngDialog', 'user')
export default class commercialIndexController {
  constructor() {
    this.init();
  }

  commercialService = new CommercialService();

  init() {

    this.commercialService.getInfo(this.$stateParams.id).then(data => {
        console.log(data);
        this.data = data;
      });

  }
}
