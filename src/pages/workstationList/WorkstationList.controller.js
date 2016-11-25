let service = null;
@Inject('workstationListService', '$stateParams')
export default class WorkstationListController {
  constructor() {
    service = this.workstationListService;
    this.init();
    this.isCompare = false;
    this.isChecked = false;
    this.checkedCids = [];
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

  cancelCollection(item){
    service.cancelCollect(item.cid,item.groupId)
    .then(data => {
        console.log(item);
        const index = this.checkedCids.indexOf(item.cid.toString());
        console.log(this.checkedCids);
        if (index > -1) {
          this.checkedCids.splice(index, 1);
          console.log(this.checkedCids);
        }
        this.setListData();
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
      this.checkedCids.splice(idx,1);
    }
    this.$stateParams.cids = this.checkedCids;
  }

}
