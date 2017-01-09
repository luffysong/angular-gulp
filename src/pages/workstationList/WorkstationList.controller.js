let service = null;
@Inject('workstationListService', '$stateParams')
export default class WorkstationListController {
  constructor() {
    service = this.workstationListService;
    this.init();
    this.isCompare = false;
    this.isChecked = false;
    this.listData = [];
    this.checkedCids = [];
    this.currentPage = 1;
  }

  init() {
    this.setListData();
  }
  setListData() {
    service.getList({
      id: this.$stateParams.id,
      pageSize: 20,
      page: this.currentPage,
    })
      .then(listData => {
        this.listData = listData;
      });
  }

  cancelCollection(item, i) {
    service.cancelCollect(item.cid,item.groupId)
    .then(data => {
        const index = this.checkedCids.indexOf(item.cid.toString());
        if (index > -1) {
          this.checkedCids.splice(index, 1);
          console.log(this.checkedCids);
        }
      this.listData.data.splice(i, 1);
    });
  }

  openCompare(){
    this.isCompare = true;
  }

  checkboxSelected($event){
    const checkbox = $event.target;
    const action = (checkbox.checked? 'add':'remove');
    const id = checkbox.id;
    if(action == 'add' && this.checkedCids.indexOf(id) == -1){
      this.checkedCids.push(id);
    }
    if(action == 'remove' && this.checkedCids.indexOf(id)!=-1){
      const idx =this.checkedCids.indexOf(id);
      this.checkedCids.splice(idx, 1);
    }
    this.$stateParams.cids = this.checkedCids;
  }

  loadMore() {
    if (this.dataLoading) return;
    this.dataLoading = true;
    this.currentPage++;

    const params = {
      id: this.$stateParams.id,
      pageSize: 20,
      page: this.currentPage,
    };
    service.getList(params).then(data => {
      this.dataLoading = false;
      if (!data.data || !data.data.length) {
        this.noMore = true;
        return;
      }
      angular.forEach(data.data, (item) => {
        this.listData.data.push(item);
      });
    });

  }

}
