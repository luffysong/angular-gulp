import krData from 'krData';
import CommercialService from './Commercial.service';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce',
 '$state', '$q', '$filter', 'ngDialog', 'user')
export default class commercialIndexController {
  constructor() {
    this.projectId = $stateParams.id;
    this.projectName = $stateParams.name;
    this.init();
  }

  commercialService = new CommercialService();

  init() {

    this.commercialService.getInfo(this.$stateParams.id).then(data => {
        this.data = data;
      });

  }
}
