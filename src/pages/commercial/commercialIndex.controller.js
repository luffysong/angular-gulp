import krData from 'krData';
import CommercialService from './Commercial.service';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce',
    '$state', '$q', '$filter', 'ngDialog', 'user')
export default class commercialIndexController {
    constructor() {
        this.projectId = $stateParams.id;
        this.init();
        this.limit = false;
    }

    commercialService = new CommercialService();

    init() {
        const vm = this;
        this.commercialService.getInfo(this.$stateParams.id).then(data => {
            this.data = data;
        }, function(error) {
            if (error.code === 403) {
                vm.limit = true;
            }
        });

        this.commercialService.getBaseInfo(this.$stateParams.id).then(data => {
            this.baseInfo = data;
        })

    }
}