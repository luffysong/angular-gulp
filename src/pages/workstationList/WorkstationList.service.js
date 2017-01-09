import { API } from 'krData';
const api = new API('/user/follow/company/group/:id');
const collectApi = new API('/user/follow/company/:cid?cid=:cid&groupId=:groupId');
@Inject('$q')
export default class WorkstationListService {
  getList(parmas) {
    return api.get(parmas);
  }

  cancelCollect(cid,groupId) {
    return collectApi.remove({cid,groupId});
  }

}
