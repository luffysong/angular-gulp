import { API } from 'krData';
const api = new API('/user/follow/company/group/:id');
export default class WorkstationListService {
  getList(id) {
    return api.get({
      id,
    });
  }
}
