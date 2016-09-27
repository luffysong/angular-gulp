import krData from 'krData';
export default class CollectionVM {
  constructor(fn, data) {
    this.ngDialog = fn;
    this.init(data);
  }
  init(data) {
    let collectDialog;
    const projectService = krData.utls.getService('projectService');
    const list = data;
    console.log(projectService.createCollect);
    function createCollect(form) {
      console.log(form);
      projectService.createCollect(form)
          .then(() => {
            console.log('ok');
          });
    }
    function collectController() {
      const vm = this;
      vm.selected = [];
      vm.createShow = false;
      vm.collections = list;
      vm.collectCancle = function () {
        collectDialog.close();
      };
      vm.save = function () {
        console.log(vm.selected);
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
        createCollect(name);
      };

      vm.change = function (item) {
        if (item.checked) {
          vm.selected.push(item.id);
        } else {
          vm.selected.map(function (value, key) {
            if (item.id === value) {
              vm.selected.splice(key, 1);
            }
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
