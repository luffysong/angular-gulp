import UcService from './uc.service';

const ucService = new UcService();

@Inject('$rootScope')
class UcMessageController {
  constructor() {
    this.init();



    this.params = {
      /*senderId: 2,*/
      endpoint: 'WEB',
      page: 1,
      pageSize: 10
    };
    this.msg = [];
    this.dataLoading = true;

    this.loadMore();
    this.getMsg();
  }

  init() {
    console.log('init');
  }

  loadMore() {
    if(this.dataLoading) return;
    this.dataLoading = true;
    this.params.page++;
    this.getMsg();
  }

  getMsg() {
    ucService.getMsg(this.params).then(data => {
      console.log(data);
      if(!data.data || !data.data.length){
        this.noMore = true;
        return;
      }
      angular.forEach(data.data,(item) => {
        this.msg.push(item);
      });
      this.dataLoading = false;
    },err => {
      console.log(err);
    });
  }

  setRead(id) {
    ucService.setRead({
      ids: [id]
    }).then(data => {
      console.log(data);
    })
  }
}

export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/message.html',
  controller: UcMessageController,
};
