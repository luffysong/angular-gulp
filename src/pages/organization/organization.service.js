import krData from 'krData';

const organizationApi = new krData.API('/org', [
  'list'
  ]);

export default class Organization {
  // getList() {
  //   return organizationApi.get().then(data => ({
  //     data: data.org.data
  //   }));
  // }
  getList(industry,phase) {
    return organizationApi.list({
      industry,
      phase,
    });
  }
}
