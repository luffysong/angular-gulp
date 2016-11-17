import krData from 'krData';

import WorkstationIndexService from './WorkstationIndex.service';
@Inject('$stateParams', 'resolveData','$validation', '$scope', '$sce', '$state', '$q', '$filter')
export default class WorkstationIndexController {
  constructor() {
    this.init();
  }

  workstationService = new WorkstationIndexService();

  init() {
    this.getCollectionList();
  }

  getCollectionList() {
    this.workstationService.collectionList()
    .then(data => {
      this.data = data;
      console.log(this.data);
    });;
  }

}
