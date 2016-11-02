import krData from 'krData';
import BaseInfoVM from './baseInfo.vm';
import MemberVM from './member.vm';
import InvestedCaseVM from './investedCase.vm';

@Inject('$stateParams', '$timeout', 'orgService', 'resolveData')
export default class OrgController {
  constructor() {
    this.init();
  }
  orgData = this.resolveData.orgData;
  // console.log(orgData);
  init() {
    console.log(this.orgData);
    if (this.orgData) {
      this.baseInfoVM = new BaseInfoVM(this.orgData);
      this.memberVM = new MemberVM(this.orgData);
      this.investedCaseVM = new InvestedCaseVM();
    }
  }
}
