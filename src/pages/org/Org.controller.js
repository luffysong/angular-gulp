import krData from 'krData';

@Inject('$stateParams', 'OrgService', 'resolveData')
export default class OrgController {
  constructor() {
    const orgData = this.resolveData.projectData;
    console.log(orgData);
  }

}
