import krData from 'krData';

@Inject('$stateParams', 'orgService', 'resolveData')
export default class OrgController {
  constructor() {
    const orgData = this.resolveData.orgData;
    console.log(orgData);
  }

}
