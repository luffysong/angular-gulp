import UcService from './uc.service';

const ucService = new UcService();

@Inject('$rootScope')
class UcMessageController {
  constructor() {
    this.msg = [
      {
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 11:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: false,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 11:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: false,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 11:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: false,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 11:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: false,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      },{
        time: '9月21日 18:00',
        hasRead: true,
        content: '你好，你所添加的项目XXX[链接]成功被创投助手收录；同时，恭喜你成为该项目的认领人，成为认领人你可以享有以下权限： - 为该项目填写融资计划、申请融资；...',
      }
    ];
  }
}

export default {
  restrict: 'AE',
  controllerAs: 'vm',
  templateUrl: '/pages/uc/templates/message.html',
  controller: UcMessageController,
};
