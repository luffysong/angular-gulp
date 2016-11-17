import krData from 'krData';

const workstationApi = new krData.API('/user/follow/company/', [
  'group'
  ]);

export default class WorkstationIndexService {
  collectionList() {
    return workstationApi.group();
  }
}
