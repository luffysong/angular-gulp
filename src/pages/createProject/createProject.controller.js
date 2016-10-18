import krData from 'krData';
import FinanceVM from './financeApply.vm';
const $validation = krData.utls.getService('$validation');
const PROJECT_TYPE = krData.utls.getService('PROJECT_TYPE');
const ROLE_META = krData.utls.getService('ROLE_META');
const ROLE = krData.utls.getService('ROLE');
const FINANCE = 'finance';
function isInvalid(ctl) {
  return ctl ? ctl.$invalid : false;
}
function validate(ctl) {
  $validation.validate(ctl);
}
@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type',
  '$scope', '$q', '$filter', '$stateParams', '$state', 'createProjectService')
export default class CreateProjectController {

  autocompleteOptions = {
    suggest: this.suggest.bind(this),
    full_match: angular.noop,
    on_select: item => {
      const obj = item.obj;
      angular.extend(this.baseInfo, obj);
    },
  };

  CLAIM_ROLE = [ROLE_META[0], ROLE_META[1]];

  project = this.createProjectService;
  baseInfo = {};
  user = {};
  similarItem = [
    {
      name: '36氪',
      info: '为创业者提供最好的产品和服务',
    },
  ];

  financeVM = new FinanceVM(this.$scope, this.$stateParams.name);


  constructor() {
    this.setProjectTypeValidator();
    this.setApplinkValidator();
    this.init();
  }

  init() {
    this.initBaseInfo();
    this.watchCompanyType();
    this.watchApplink();
    this.initView();
  }

  initBaseInfo() {
    this.baseInfo = {
      financingNeed: this.FINANCE_NEED.UNKNOWN,
    };
  }

  initView() {
    if (this.type === FINANCE) {
      this.title = '融资申请';
      this.id = this.$stateParams.id;
      if (this.financeState === this.project.FINANCE_AUDITING) {
        this.step = 4;
      } else if (this.financeState === this.project.FINANCE_NONE) {
        this.ensureFinanceAllow();
      }
    }
  }

  ensureFinanceAllow() {
    this.$state.go('project', {
      id: this.$stateParams.id,
    });
  }

  isWeb() {
    return this.baseInfo.companyType === PROJECT_TYPE.WEB;
  }

  isApp() {
    return this.baseInfo.companyType === PROJECT_TYPE.APP;
  }

  isWebApp() {
    return this.baseInfo.companyType === PROJECT_TYPE.WEB_APP;
  }

  isWeixin() {
    return this.baseInfo.companyType === PROJECT_TYPE.WECHAT;
  }

  isIdea() {
    return this.baseInfo.companyType === PROJECT_TYPE.IDEA;
  }

  hasRole() {
    return this.baseInfo.companyRole || this.user.companyRole;
  }

  isFunder() {
    return this.baseInfo.companyRole === ROLE.START_UP_MEMBER ||
      this.user.companyRole === ROLE.START_UP_MEMBER;
  }

  loadUserInfo() {
    if (this.isFunder() || this.isMaintainer() || this.isClaiming) {
      krData.User.getUserInfo()
        .then((user) => {
          this.user.userPhone = user.phone;
          this.user.userName = user.name;
          this.user.userEmail = user.email;
          this.user.userWeiXin = user.weixin;
        });
    }
  }

  isMaintainer() {
    return this.baseInfo.companyRole === ROLE.MEMBER ||
      this.user.companyRole === ROLE.MEMBER;
  }

  // notSelectRole() {
  //   return angular.isUndefined(this.baseInfo.companyRole);
  // }

  getIndustry(industry) {
    return this.$filter('industry')(industry);
  }

  isInvestorOrUser() {
    const role = this.baseInfo.companyRole;
    return role === ROLE.INVESTOR || role === ROLE.USER;
  }

  needFinance() {
    return this.isFunder() &&
    this.baseInfo.financingNeed === this.FINANCE_NEED.FINANCING;
  }

  // 移除与所选产品类型不相关的属性
  removeProps(obj) {
    let props = [];
    const all = ['iosLink', 'androidLink', 'intro', 'website'];
    switch (this.baseInfo.companyType) {
      case PROJECT_TYPE.WEB:
        props = ['website'];
        break;
      case PROJECT_TYPE.APP:
      case PROJECT_TYPE.WEB_APP:
        props = ['website', 'iosLink', 'androidLink'];
        break;
      case PROJECT_TYPE.WECHAT:
        props = ['weixin'];
        break;
      case PROJECT_TYPE.IDEA:
        props = ['intro'];
        break;
      default:
        props = all;
    }
    const copy = krData.utls.mapProps(props, obj);
    all.forEach(v => delete obj[v]);
    angular.extend(obj, copy);
  }

  watchCompanyType() {
    this.$scope.$watch('vm.baseInfo.companyType', (nv) => {
      if (!nv) return;
      const website = this.baseInfo.form.website;
      if (isInvalid(website)) {
        validate(website);
      }
      if (nv === PROJECT_TYPE.APP || nv === PROJECT_TYPE.WEB_APP) {
        if (this.baseInfo.iosLink || this.baseInfo.androidLink) {
          krData.utls.getService('$timeout')(() => {
            validate(this.baseInfo.form.ioslink);
            validate(this.baseInfo.form.androidlink);
          });
        }
      }
    });
  }

  watchApplink() {
    this.$scope.$watch('[vm.baseInfo.iosLink, vm.baseInfo.androidLink]', (nv) => {
      if (angular.isUndefined(nv[0]) && angular.isUndefined(nv[1])) return;
      const ioslink = this.baseInfo.form.ioslink;
      const androidlink = this.baseInfo.form.androidlink;
      validate(ioslink);
      validate(androidlink);
    });
  }

  uploadImage($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then(data => {
          this.baseInfo.logo = data.src;
        }).catch((err) => krData.Alert.alert(err.msg));
    }
  }

  uploadIdCard($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then(data => {
          this.user.userBusinessCard = data.src;
        }).catch((err) => krData.Alert.alert(err.msg));
    }
  }

  setProjectTypeValidator() {
    $validation.setExpression({
      projectType: (value, scope, element, attrs, param) => {
        let boolValue = false;
        if (param === 'website') {
          boolValue = this.isWebApp() || this.isWeb();
        } else if (param === 'applink') {
          boolValue = this.isWebApp() || this.isApp();
        }
        if (boolValue && !value) {
          return false;
        }
        return true;
      },
    }).setDefaultMsg({
      projectType: {},
    });
  }
  setApplinkValidator() {
    $validation.setExpression({
      applink: () => {
        if (this.baseInfo.iosLink || this.baseInfo.androidLink) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      applink: {},
    });
  }

  claim(project) {
    this.claiming = true;
    this.project.getPrivilege(project.id)
      .then((projectData) => {
        this.claimProject = project;
        this.claimer = projectData;
        this.isClaiming = true;
        this.step = 2;
        this.loadUserInfo();
      });
  }

  claimRemote() {
    const userCopy = angular.copy(this.user);
    userCopy.privilegeEnum = userCopy.companyRole;
    delete userCopy.companyRole;
    delete userCopy.form;
    userCopy.id = this.claimProject.id;
    this.project.claim(this.claimProject.id, userCopy)
      .then(() => {
        this.step = 4;
      })
      .catch((err) => {
        krData.Alert.alert(`创建公司失败:${err.msg}`);
      });
  }
  call110() {
    this['110'] = true;
  }

  // 走创建公司流程，角色已选
  go(step) {
    this.step = step;
    if (step === 2) {
      this.loadUserInfo();
    }
  }

  // 投资人或者用户直接创建公司
  saveBaseInfo() {
    const projectInfo = angular.extend({}, this.baseInfo, this.user);
    delete projectInfo.form;
    this.removeProps(projectInfo);
    this.createRemote(projectInfo);
  }

  createRemote(projectInfo) {
    this.project.create(projectInfo)
      .then(() => {
        this.step = 4;
      })
      .catch((err) => {
        krData.Alert.alert(`创建公司失败:${err.msg}`);
      });
  }

  saveFinance() {
    // 融资入口则调用融资接口
    if (this.type === FINANCE) {
      this.funds();
      return;
    }
    const projectInfo = angular.extend({}, this.baseInfo, this.user, this.financeVM.finance);
    delete projectInfo.form;
    this.removeProps(projectInfo);
    this.createRemote(projectInfo);
  }

  funds() {
    const fundsInfo = angular.extend({}, this.financeVM.finance);
    this.project.funds(this.id, fundsInfo)
      .then(() => { this.step = 4; })
      .catch((err) => { krData.Alert.alert(`申请融资失败：${err.msg}`); });
  }

  prev() {
    this.step--;
  }
  next(form) {
    if (!this.validate(form)) {
      return;
    }
    switch (this.step) {
      case 1:
        this.go(2, form);
        break;
      case 2:
        if (!this.validate(this.user.form)) return;
        if (this.isFunder() && this.needFinance()) {
          this.go(3, form);
        } else if (!this.isClaiming) {
          this.saveBaseInfo(form);
        } else {
          this.claimRemote();
        }
        break;
      case 3:
        if (!this.validate(form) && this.financeVM.readed) {
          break;
        } else {
          this.saveFinance(form);
        }
        break;
      default: return;
    }
  }
  validate(form) {
    if (!$validation.checkValid(form)) {
      validate(form);
      krData.Alert.alert('表单不合法，请更正红色表示部分');
      return false;
    }
    return true;
  }

  getRequired() {
    if (this.baseInfo.companyType === this.PROJECT_TYPE.WEB) {
      return 'required';
    }
    return '';
  }

  makeSuggestResult(kw, list = []) {
    const that = this;
    return list.map(function mapList(com) {
      return {
        label: that.$sce.trustAsHtml(`<div>
          <img src='${com.logo}' />
          <div class="suggest-project-text">
            <p><span>${com.name}</span><span>${that.getIndustry(com.industry)}</span></p>
            <p class="brief">${com.brief}</p>
          </div>
          </div> `),
        value: com.name,
        obj: com,
      };
    });
  }
  suggest(kw) {
    const deferred = this.$q.defer();
    this.project.suggest(kw).then((list) => {
      this.suggestList = list;
      deferred.resolve(this.makeSuggestResult(kw, list));
    });

    return deferred.promise;
  }

}
