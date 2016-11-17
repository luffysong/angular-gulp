let service = null;
@Inject('workstationListService', '$stateParams')
export default class WorkstationListController {
  constructor() {
    service = this.workstationListService;
    this.init();
  }

  init() {
    this.setListData();
  }
  setListData() {
    service.getList(this.$stateParams.id)
      .then(listData => {
        this.listData = listData;
      });
  }
}
