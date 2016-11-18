import krData from 'krData';
export default class CollectionVM {
  constructor(fn, id, scope) {
    this.$scope = scope;
    this.ngDialog = fn;
    this.id = id;
    this.init();
  }
  collection;
  init() {
    this.collection = this.collect;
  }

  collect(id) {
    const workstationService = krData.utls.getService('WorkstationIndexService');
    const wid = id;
    const vm = this;
    function collectController() {
      this.collectCancle = () => {
        vm.collectDialog.close();
      };
      this.collectDelete = () => {
        workstationService.deleteCollection(wid)
          .then(() => {
            vm.collectDialog.close();
             workstationService.collectionList()
            .then(data => {
              vm.$scope.collectionVM.dataList = data;
            });
          },(err)=>{
            krData.Alert.alert(err.msg);
          });
      };
    }

    this.collectDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/workstation/templates/delete.html\'" center>/div>',
      plain: true,
      appendTo: '#workstationDetailWrapper',
      controller: collectController,
      controllerAs: 'vm',
    });
  }
}
