import krData from 'krData';
export default class CollectionVM {
  constructor(fn, id) {
    this.ngDialog = fn;
    this.init(id);
  }
  init(id) {
    let collectDialog;
    const projectService = krData.utls.getService('projectService');
    const Cid = id;
    function collectController() {
      const vm = this;
      vm.selected = [];
      vm.createShow = false;
      projectService.collect(Cid)
      .then((data) => vm.collections = data);
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
        projectService.createCollect(name)
          .then(() => {
            vm.createShow = false;
            vm.suc = true;
            setTimeout(() => {
              vm.suc = false;
            }, 3000);
            projectService.collect({id:Cid})
            .then((data) => vm.collections = data);
          });
      };

      vm.change = function (item) {
        const form = {
          cid: Cid,
          groupId: item.id,
        };
        if (item.followed) {
          projectService.collectCompany(form)
          .then(() => {
            vm.suc = true;
            setTimeout(() => {
              vm.suc = false;
            }, 3000);
            ++item.count;
          });
        } else {
          projectService.deconsteCompany(form)
          .then(() => {
            vm.cancle = true;
            setTimeout(() => {
              vm.cancle = false;
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
