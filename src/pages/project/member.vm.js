export default class MemberVM {
  constructor(data) {
    this.data = data;
    this.init();
  }
  init() {
    let num = 1;
    function getList(limitlist, list, n) {
      if (list.length > (5 * n)) {
        limitlist = list.slice(0, (5 * n));
      } else {
        limitlist = list;
      }
      return limitlist;
    }
    function more() {
      ++num;
      this.members = getList(this.members, this.data.members, num);
    }
    function showMore() {
      return !(this.members === this.data.members);
    }
    function displayData() {
      return !(this.data.story && this.data.teamTags && this.data.members.length);
    }
    function show() {
      return this.data.story || this.data.teamTags || this.data.members.length;
    }
    this.members = getList(this.members, this.data.members, 1);
    this.more = more;
    this.showMore = showMore;
    this.displayData = displayData;
    this.show = show;
  }
}
