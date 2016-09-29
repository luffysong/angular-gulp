import krData from 'krData';
export default class CollectionVM {
  constructor(fn, data, id) {
    this.ngDialog = fn;
    this.init(data, id);
  }
  init(data, id) {
    let collectDialog;
    const projectService = krData.utls.getService('projectService');
    const list = data;
    const Cid = id;
    function collectController() {
      const vm = this;
      vm.selected = [];
      vm.createShow = false;
      vm.collections = list;
      vm.suc = false;
      vm.cancle = false;
      vm.collectCancle = function () {
        collectDialog.close();
      };
      vm.createNew = function () {
        this.createShow = true;
      };
      vm.create = function () {
        if (!this.collectionName) {
          return false;
        }
        const name = {
          name: vm.collectionName,
        };
        // projectService.createCollect(name)
        //   .then(() => {
        //     vm.createShow = false;
        //     vm.suc = true;
        //     hidden(vm.suc);
        //     projectService.collect(Cid)
        //     .then((data) => vm.collections = data);
        //   });
      };

      vm.change = function (item) {
        let form = {
          cid: Cid,
          groupId: item.id,
        };
        if (item.followed) {
          projectService.collectCompany(form)
          .then(() => {
            vm.suc = true;
            setTimeout(() => {
              vm.suc = false; console.log('hidden', name)
            }, 3000);
            ++item.count;
          });
        } else {
          projectService.deleteCompany(form)
          .then(() => {
            vm.cancle = true;
            setTimeout(() => {
              vm.cancle = false; console.log('hidden', name)
            }, 3000);
            --item.count;
          });
        }
      };
    }
    const str = '<div ng-include="' +
    "'" + '/pages/project/templates/collection.html' + "'" +
    '" center>/div>';
    function collection() {
      collectDialog = this.ngDialog.open({
        template: str,
        plain: true,
        appendTo: '.project-wrapper',
        controller: collectController,
        controllerAs: 'vm',
      });
    }

    this.collection = collection;
  }

}
