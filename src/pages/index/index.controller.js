import krData from 'krData';
import ProjectService from '../project/project.service';

class TestAPI extends krData.API {

}

@Inject('$timeout', '$window','$stateParams','$state','$scope', '$q', 'user')
export default class homeController {

  constructor() {
    this.api = new TestAPI();
    this.init();
  }

  projectService = new ProjectService();

  init() {

    this.statusList = [
      {
        name: '正在融资',
        value: 'funding',
        active: true
      },{
        name: '优选',
        value: 'funding',
        active: false
      },{
        name: '36氪报道',
        value: 'funding',
        active: false
      },{
        name: '融资完成',
        value: 'funding',
        active: false
      }
    ];

    this.tagList = [
      {
        name: '文化娱乐/IP',
        value: 'funding',
        active: true
      },{
        name: '企业服务',
        value: 'funding',
        active: false
      },{
        name: '智力能硬件',
        value: 'funding',
        active: false
      },{
        name: '电子商务',
        value: 'funding',
        active: false
      }
    ];

  }

  switchStatus(i) {
    this.statusList.forEach((item,index) => {
      if(index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    })
  }

  switchTag(i) {
    this.tagList.forEach((item,index) => {
      if(index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    })
  }


}

