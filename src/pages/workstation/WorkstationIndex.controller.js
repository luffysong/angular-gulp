import krData from 'krData';
import CollectionVM from './collection.vm';
import WorkstationIndexService from './WorkstationIndex.service';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce', '$state', '$q', '$filter', 'ngDialog', 'user', '$timeout')
export default class WorkstationIndexController {
  constructor() {
    this.init();
  }

  workstationService = new WorkstationIndexService();

  init() {
    this.closeAnnouncement = window.closeAnnouncement;
    this.$scope.collectionVM = new CollectionVM(this.ngDialog, this.id, this.$scope);
    this.getCollectionList();
    this.$scope.newCollection = false;
    this.$scope.isFocus = false;
    this.$scope.isEdit = false;
    this.getUser();
  }

  getCollectionList() {
    this.workstationService.collectionList()
    .then(data => {
      this.$scope.collectionVM.dataList = data;
    });
  }

  showNewCollection() {
    this.$scope.newCollection = true;
    this.$scope.isFocus = true;
  }

  createCollection(e) {
    if (e.type === 'blur' || e.keyCode === 13) {
      if (this.createLoading) {
        return;
      }
      this.createLoading = true;
      // 解决keyup与blur同时触发造成重复请求
      this.$timeout(() => {
        this.createLoading = false;
      }, 200);
      if (!this.collectionName) {
        this.$scope.newCollection = false;
        this.$scope.isFocus = false;
        return;
      }
      this.workstationService.createCollection(this.collectionName)
      .then(data => {
        this.$scope.newCollection = false;
        this.$scope.newFocus = false;
        this.$scope.isFocus = false;
        const item = {
          name: this.collectionName,
          count: 0,
          id: data.id,
        };
        this.$scope.collectionVM.dataList.groupList.unshift(item);
      }).catch(err => {
        krData.Alert.alert(err.msg);
      });
    }
  }

  updateCollection(e, id, name) {
    if (this.name === '') {
      return;
    }
    if (e.type === 'blur' || e.keyCode === 13) {
      this.workstationService.updateCollection(id,name)
      .then(() => {
        this.$scope.newCollection = false;
        this.$scope.isFocus = false;
        this.getCollectionList();
      }).catch(err => {
        krData.Alert.alert(err.msg);
      });
    }
  }

  showDelete(id, state) {
    this.$scope.collectionVM.dataList.groupList.forEach((item) => {
      if (item.id === id) {
        item.isDelete = state;
      }
    });
  }

  editCollection(id) {
    this.$scope.collectionVM.dataList.groupList.forEach((item) => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
        this.$scope.editId = id;
        this.$scope.isEdit = item.isEdit;
        this.$scope.isFocus = true;
      }
    });
  }

  getUser() {
    krData.User.getUserInfo().then(data => {
      this.userData = data;
      if (data.investorType > 90) {
        this.$state.go('validate');
      }
    }).catch(err => {
      /*if(err.code === 403) {
        const okUrl = window.location.href;
        console.log(okUrl);
        this.$state.go('login',{okUrl: okUrl});
      }*/
    });
  }

  toLogin() {
    krData.utls.login();
  }
}
