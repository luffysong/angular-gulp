export default class CollectionVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
  init() {
    let collectDialog;
    function collectController() {
      let vm = this;
      vm.selected = [];
      vm.createShow = false;
      vm.list = [
        { id: 1, name: 'xxx', num: 23 },
        { id: 2, name: 'xxx', num: 23 },
        { id: 3, name: 'xxx', num: 23 },
        { id: 4, name: 'xxx', num: 23 },
        { id: 5, name: 'xxx', num: 23 },
      ];

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
