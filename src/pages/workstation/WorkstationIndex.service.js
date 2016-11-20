import krData from 'krData';

const workstationApi = new krData.API('/user/follow/company/', [
  'group',
  ],{
    delete: {
      method: 'delete',
      url: '/n/api/user/follow/company/group/:id',
    },
    create: {
      method: 'post',
      url: '/n/api/user/follow/company/group',
    },
    update: {
      method: 'put',
      url: '/n/api/user/follow/company/group/:id'
    }
  });
export default class WorkstationIndexService {

  collectionList() {
    return workstationApi.group();
  }

  deleteCollection(id){
    return workstationApi.delete(id);
  }

  createCollection(name){
    const collectionName = {
      name: name
    }
    return workstationApi.create(collectionName);
  }

  updateCollection(id,name){
    const collectionName = {
      name: name
    }
    return workstationApi.update({ id },collectionName);
  }
}
