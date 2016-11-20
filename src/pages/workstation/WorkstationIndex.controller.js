import krData from 'krData';
import CollectionVM from './collection.vm';
import WorkstationIndexService from './WorkstationIndex.service';
@Inject('$stateParams', 'resolveData','$validation', '$scope', '$sce', '$state', '$q', '$filter', 'ngDialog')
export default class WorkstationIndexController {
  constructor() {
    this.init();
  }

  workstationService = new WorkstationIndexService();

  init() {
    this.$scope.collectionVM = new CollectionVM(this.ngDialog, this.id, this.$scope);
    this.getCollectionList();
    this.$scope.newCollection = false;
    this.$scope.isFocus = false;
    this.$scope.isEdit = false;
  }

  getCollectionList() {
    this.workstationService.collectionList()
    .then(data => {
      this.$scope.collectionVM.dataList = data;
    });
  }

  showNewCollection(){
    this.$scope.newCollection = true;
    this.$scope.isFocus = true;
  }

  createCollection(e) {
    if (e.keyCode === 13) {
      this.workstationService.createCollection(this.collectionName)
      .then(data => {
        this.$scope.newCollection = false;
        this.$scope.newFocus = false;
        this.collectionName = '';
        this.getCollectionList();
      });
    }
  }

  updateCollection(e,id,name) {
    if (e.keyCode === 13) {
      this.workstationService.updateCollection(id,name)
      .then(data => {
        this.$scope.newCollection = false;
        this.collectionName = '';
        this.getCollectionList();
      });
    }
  }

  showDelete(id,state){
    this.$scope.collectionVM.dataList.groupList.forEach((item) => {
      if(item.id === id){
        item.isDelete = state;
      }
    });
  }

  editCollection(id){
    this.$scope.collectionVM.dataList.groupList.forEach((item) => {
      if(item.id === id){
        item.isEdit = !item.isEdit;
        this.$scope.editId = id;
        this.$scope.isEdit = item.isEdit;
        this.$scope.isFocus = true;
      }
    });
  }

}
