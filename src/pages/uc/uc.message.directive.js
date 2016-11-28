import krData, { utls } from 'krData';

@Inject('$rootScope', 'ucService')
class UcMessageController {
  constructor() {
    this.init();


    this.params = {
      /* senderId: 2,*/
      endpoint: 'WEB',
      page: 1,
      pageSize: 10,
      markReaded: false,
    };
    this.msg = [];
    this.dataLoading = true;
    this.hasMsg = false;

    this.loadMore();
    this.getMsg();
    this.getUnRead();
  }

  init() {
  }

  getUnRead() {
    this.ucService.getUnRead({
      endpoint: 'WEB',
    }).then(data => {
      this.hasMsg = data.hasNewMsg;
    });
  }

  loadMore() {
    if (this.dataLoading) return;
    this.dataLoading = true;
    this.params.page++;
    this.getMsg();
  }

  getMsg() {
    this.ucService.getMsg(this.params).then(data => {
      if(data.totalCount === 0) {
        this.noData = true;
        return;
      }
      if(!data.data || !data.data.length){
        this.noMore = true;
        return;
      }
      this.handelUrl(data.data);
      angular.forEach(data.data, (item) => {
        this.msg.push(item);
      });
      this.dataLoading = false;
    }, err => {
      krData.Alert.alert(err.msg);
    });
  }

  handelUrl(data) {
    data.forEach(function eachUrl(item) {
      item.content = item.content
        .replace(/bind-url="(.+?)"/g, function replaceBindUrl($0, $1) {
          return `ng-if="notification.submitLoading !== item" ng-click="vm.triggerAction('
            ${$1.replace(/http:\/\//g, '//')}',item,$event)"`;
        })
        .replace(/class="actions"/g, 'class="actions"');
      item.content = utls.getService('$sce').trustAsHtml(item.content);
    });
  }

  triggerAction(url, item, e) {
    if (e) {
      e.preventDefault();
    }
    this.ucService.sendAction(url, data => {
      item.content = utls.getService('$sce').trustAsHtml(data.content);
    }, err => {
      krData.Alert.alert(err.msg);
      const index = this.msg.indexOf(item);
      this.msg.splice(index, 1);
    });
  }

  setRead(id, index) {
    this.ucService.setRead({
      ids: [id],
    }).then(() => {
      this.msg[index].readed = true;
    });
  }
}

export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/message.html',
  controller: UcMessageController,
};
