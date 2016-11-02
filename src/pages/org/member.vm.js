export default class MemberVM {
  constructor(data) {
    this.allMembers = data.member.member;
    this.memberData = data.member.member.slice(0, 3);
    this.isMore = false;
  }
  more() {
    this.isMore = true;
    this.memberData = this.allMembers;
  }
}
