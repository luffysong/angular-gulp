export default class MemberVM {
  constructor(data) {
    this.data = data;
    this.init();
  }
  init() {
    if (this.data.members.length > 1) {
      this.data.membersList = this.data.members.slice(0, 1);
      this.moreShow = true;
    }
    function more() {
      this.data.membersList = this.data.members;
      this.moreShow = false;
      console.log('list', this.data.membersList, this.moreShow);
    }
    this.more = more;
  }
}
