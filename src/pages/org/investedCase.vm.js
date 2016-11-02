export default class InvestedCaseVM {
  constructor() {
    this.hasSpreaded = {
      industry: false,
      phase: false,
    };
  }
  spreadList(item) {
    this.hasSpreaded[item] = !this.hasSpreaded[item];
  }
}
