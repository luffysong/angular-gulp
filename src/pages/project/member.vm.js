import krData from 'krData';
export default class MemberVM extends krData.FormVM {
  constructor(data, id) {
    super(data);
    this.data = data;
    this.id = id;
    this.init();
    this.teamTags = this.data.teamTags || [];
    this.story = this.data.story || '';
    this.projectService = krData.utls.getService('projectService');
  }

  num = 1;
  getList(limitlist, list, n) {
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

  setData() {
    function keyup(e) {
      if (e.keyCode === 13) {
        this.teamTags.map((value) => {
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
  save() {
    const form = {
      story: this.story,
      teamTags: this.teamTags.toString(),
    };
    this.projectService.editmember({
      id: this.id,
    }, form)
      .then(() => {
        this.recovery();
        this.ok();
      });
  }
}
