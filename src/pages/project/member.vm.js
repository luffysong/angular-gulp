import krData from 'krData';
export default class MemberVM extends krData.FormVM {
  constructor(fn, data, id) {
    super(data);
    this.members = this.members || [];
    this.data = data;
    this.id = id;
    this.ngDialog = fn;
    this.init();
    this.teamTags = this.data.teamTags || [];
    this.story = this.data.story || '';
    this.projectService = krData.utls.getService('projectService');
  }

  num = 1;
  getList(limitlist = [], list = [], n) {
    if (list.length > (5 * n)) {
      limitlist = list.slice(0, (5 * n));
    } else {
      limitlist = list;
    }
    return limitlist;
  }
  more() {
    ++this.num;
    this.members = this.getList(this.members, this.data.members, this.num);
  }
  showMore() {
    return !(this.members === this.data.members);
  }
  displayData() {
    const display = (!this.data.teamTags && !this.data.story && this.data.members.length === 0);
    if (display) {
      return true;
    }
    return false;
  }
  show() {
    return this.data.story || this.data.teamTags || this.data.members.length;
  }
  init() {
    this.members = this.getList(this.members, this.data.members, 1);
  }


  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
    function keyup(e) {
      if (e.keyCode === 13) {
        this.teamTags.forEach((value) => {
          if (value === this.key) {
            krData.Alert.alert('此优势已填写');
            this.key = '';
          }
        });
        if (this.teamTags.length === 3) {
          krData.Alert.alert('团队关键优势最多添加三个');
        } else if (this.key) {
          this.teamTags.push(this.key);
          this.key = '';
        }
      }
    }
    function deletetag(index) {
      this.teamTags.splice(index, 1);
    }
    this.keyup = keyup;
    this.deletetag = deletetag;
  }

  recovery() {
    const tempData = {};
    angular.copy(this.originalData, tempData);
    angular.extend(this, tempData);
    angular.extend(this.data, tempData);
  }

  save() {
    const vm = this;
    const form = {
      story: this.story,
      teamTags: this.teamTags.toString(),
    };
    vm.investorDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/project/templates/ensureSave.html\'" center></div>',
      plain: true,
      appendTo: '#projectDetailWrapper',
      className: 'ensureSave-dialog',
      controller: saveController,
      controllerAs: 'vm',
    });


    function saveController() {
      this.cancel = () => {
        vm.investorDialog.close();
      };
      this.ensure = () => {
        vm.projectService.editmember({
          id: vm.id,
        }, form)
          .then(() => {
            vm.recovery();
            vm.ok();
            krData.Alert.success('数据保存成功');
            vm.investorDialog.close();
          });
      };
    }


  }
}
