import krData from 'krData';
export default class CollectionVM {
  constructor(fn, id) {
    this.ngDialog = fn;
    this.id = id;
  }
  collection() {
    const projectService = krData.utls.getService('projectService');
    const Cid = this.id;
    const vm = this;
    function collectController() {
      this.selected = [];
      this.createShow = false;
      projectService.collect(Cid)
      .then((data) => this.collections = data);
      this.suc = false;
      this.cancle = false;
      this.collectCancle = () => {
        vm.collectDialog.close();
      };
      this.createNew = () => {
        this.createShow = true;
      };
      this.create = () => {
        if (!this.collectionName) {
          return false;
        }
        const name = {
          name: this.collectionName,
        };
        projectService.createCollect(name)
          .then(() => {
            this.createShow = false;
            this.suc = true;
            this.collectionName = '';
            setTimeout(() => {
              this.suc = false;
            }, 3000);
            projectService.collect(Cid)
            .then((data) => this.collections = data);
          });
      };

      this.change = (item) => {
        const form = {
          cid: Cid,
          groupId: item.id,
        };
        if (item.followed) {
          projectService.collectCompany(form)
          .then(() => {
            this.suc = true;
            setTimeout(() => {
              this.suc = false;
            }, 3000);
            ++item.count;
          });
        } else {
          projectService.deconsteCompany(form)
          .then(() => {
            this.cancle = true;
            setTimeout(() => {
              this.cancle = false;
            }, 3000);
            --item.count;
          });
        }
      };
    }
    this.collectDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/collection.html\'" center>/div>',
      plain: true,
      appendTo: '.project-wrapper',
      controller: collectController,
      controllerAs: 'vm',
    });
  }

}
