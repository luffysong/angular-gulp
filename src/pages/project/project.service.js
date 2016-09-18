import { API } from 'krData';
export default class ProjectService extends API {
  constructor() {
    super('/company/:id');
  }
}
