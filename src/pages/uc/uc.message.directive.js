import UcService from './uc.service';
import krData from 'krData';
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
  }

  loadMore() {
    if(this.dataLoading) return;
    this.dataLoading = true;
    this.params.page++;
    this.getMsg();
  }

  getMsg() {
    ucService.getMsg(this.params).then(data => {
      if(!data.data || !data.data.length){
        this.noMore = true;
        return;
      }
      this.handelUrl(data.data);
      angular.forEach(data.data,(item) => {
        this.msg.push(item);
      });
      this.dataLoading = false;
    },err => {
    });
  }

  handelUrl(data) {
    data.forEach(function (item) {
      item.content = item.content
        .replace(/bind-url="(.+?)"/g, function ($0, $1) {
          return 'ng-if="notification.submitLoading !== item" ng-click="vm.triggerAction(\'' +
            $1.replace(/http:\/\//g, '//') + '\',item,$event)"';
        })
        .replace(/class="actions"/g, 'class="actions"')
        .replace(/\n/g,'<br />');
    });
  }

  triggerAction(url, item, e) {
    e && e.preventDefault();
    ucService.sendAction(url, data => {
      item.content = data.content;
    }, err => {
      krData.Alert.alert(err.msg);
      var index = this.msg.indexOf(item);
      this.msg.splice(index, 1);
    });
  }

  setRead(id) {
    ucService.setRead({
      ids: [id]
    }).then(data => {
    })
  }
}

export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/message.html',
  controller: UcMessageController,
};
