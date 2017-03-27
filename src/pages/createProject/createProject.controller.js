import krData from 'krData';
import FinanceVM from './financeApply.vm';
const $validation = krData.utls.getService('$validation');
const PROJECT_TYPE = krData.utls.getService('PROJECT_TYPE');
const ROLE_META = krData.utls.getService('ROLE_META');
const ROLE = krData.utls.getService('ROLE');
const FINANCE = 'finance';
function validate(ctl) {
  $validation.validate(ctl);
}
@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type', '$window',
  '$scope', '$q', '$filter', '$stateParams', '$state', 'createProjectService','ngDialog','$timeout')
export default class CreateProjectController {

  autocompleteOptions = {
    suggest: this.suggest.bind(this),
    auto_select_first: true,
    full_match: (item, word) => item.value.toLowerCase() === word.toLowerCase(),
    on_detach: () => this.searchClaimList(),
    on_select: item => {
      const obj = item.obj;
      this.selectProject = obj;
      this.baseInfo.companyType = '';
      this.baseInfo.companyRole = null;
      this.baseInfo.financingNeed = this.FINANCE_NEED.UNKNOWN;
      angular.extend(this.baseInfo, obj);
      this.baseInfo.logoState = true;
    },
    on_leaveSelect: word => {
      if (this.selectProject) {
        this.selectProject = null;
        this.initBaseInfo();
        this.baseInfo.name = word;
        this.baseInfo.brief = '';
        this.baseInfo.industry = '';
        this.baseInfo.logo = '';
        this.baseInfo.logoState = true;
      }
    },
  };

  CLAIM_ROLE = [ROLE_META[0], ROLE_META[1]];

  NOT_FOUNDER_FINANCE_NEED = [
    {
      desc:"暂无需求",
      id:4,
      value:"NO_NEED"
    },
    {
      desc:"寻求收购",
      id: 3,
      value: "ACQUISITION"
    }
  ];

  project = this.createProjectService;
  baseInfo = {};
  user = {};
  createPermission = true;
  financeVM = new FinanceVM(this.$scope, this.$stateParams.name);


  constructor() {
    this.setProjectTypeValidator();
    this.setApplinkValidator();
    this.init();
  }

  isValidAfterSelect() {
    return this.baseInfo.brief &&
        this.baseInfo.industry &&
        this.baseInfo.logo;
  }

  init() {
    this.getCreatePermission();
    this.ensureLogin();
    this.initBaseInfo();
    this.watchCompanyType();
    this.watchApplink();
    this.watchName();
    this.initView();
    this['110'] = false;
    this.baseInfo.logoState = false;
    this.moreInfo = false;
    this.getPrivileges();
  }

  getCreatePermission() {
    this.project.getCreateNumberPermission()
      .then(data => {
        this.announcement();
    }).catch((err) => {
      this.createPermission = false;
      this.loadSimilarProjects(err.data.industry);
    });
  }

  ensureLogin() {
    const userService = krData.utls.getService('user');
    userService.then(() => (userService.ensureLogin()));
  }

  initBaseInfo() {
    this.baseInfo = {
      financingNeed: this.FINANCE_NEED.UNKNOWN,
      form: this.baseInfo.form,
    };
  }

  initView() {
    if (this.$stateParams.id) {
      this.project.loadFinance(this.$stateParams.id, 'auditing')
        .then((financeData) => { this.financeInfo = financeData; });

      this.project.getFinanceInfo(this.$stateParams.id)
      .then((financeData) => {
        this.financeVM.finance = financeData;
      });
    }
    if (this.type === FINANCE) {
      this.title = '融资申请';
      this.id = this.$stateParams.id;
      this.name = this.$stateParams.name;
      if (this.financeState === this.project.FINANCE_AUDITING) {
        this.step = 4;
      } else if (this.financeState === this.project.FINANCE_NONE) {
        this.ensureFinanceAllow();
      } else if (this.financeState !== this.project.FINANCE_ALLOW &&
        this.financeState !== this.project.FINANCE_PASS) {
        krData.Alert.alert(`出错啦：${this.financeState.msg || '未知错误'}`);
      }
    }
  }

  getPrivileges() {
    if (this.financeVM.finance.privilege === 'MUST_APPLY') {
      this.financeVM.privileges = true;
    } else {
      this.financeVM.privileges = false;
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

  isHardware() {
    return this.baseInfo.companyType === PROJECT_TYPE.HARDWARE_OTHER;
  }

  isNotOnline() {
    return this.baseInfo.companyType === PROJECT_TYPE.NOT_ONLINE;
  }

  isFinance() {
    return this.baseInfo.financingNeed === this.FINANCE_NEED.FINANCING;
  }

  hasRole() {
    return this.baseInfo.companyRole || this.user.companyRole;
  }

  isFunder() {
    return this.baseInfo.companyRole === ROLE.START_UP_MEMBER ||
      this.user.companyRole === ROLE.START_UP_MEMBER;
  }

  isClaimingMember() {
    return this.user.companyRole === ROLE.MEMBER && this.isClaiming;
  }

  loadUserInfo() {
    if (this.userLoaded) {
      return;
    }
    if (this.isFunder() || this.isMaintainer() || this.isClaiming) {
      krData.User.getUserInfo()
        .then((user) => {
          this.userLoaded = true;
          this.user.userPhone = user.phone;
          this.user.userName = user.name;
          this.user.userEmail = user.email;
          this.user.userWeiXin = user.weixin ? user.weixin : '';
        });
    }
  }

  isMaintainer() {
    return this.baseInfo.companyRole === ROLE.MEMBER ||
      this.user.companyRole === ROLE.MEMBER;
  }


  getIndustry(industry) {
    return this.$filter('industry')(industry);
  }

  isInvestorOrUser() {
    const role = this.baseInfo.companyRole;
    return role === ROLE.INVESTOR || role === ROLE.USER;
  }

  needFinance() {
    return this.isFunder() && !this.isClaiming &&
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

  watchName() {
    this.$scope.$watch('vm.baseInfo.name', (nv) => {
      if (nv) {
        validate(this.baseInfo.form.fullName);
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
          this.baseInfo.logoState = true;
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

  uploadBp($files) {
    const name = this.baseInfo.name || this.name;
    let validObj = null;
    if ($files.length) {
      validObj = krData.utls.validateBP($files[0]);
      if (!validObj.valid) {
        krData.Alert.alert(validObj.msg);
        return;
      }
      krData.utls.uploadBp(name, $files[0])
        .then(data => {
          this.baseInfo.bp = data.src;
          this.bpName = `[${name}]商业计划书.pdf`;
        }, err => {
          this.bpUploading = false;
          krData.Alert.alert(`上传BP失败:${err.msg}`);
        }).then(null, null, (progress) => {
          if (progress.type === 'load') {
            this.bpProgress = '100%';
            this.bpUploading = false;
          } else if (progress.type === 'progress') {
            this.bpProgress = `${(progress.loaded * 100) / progress.total}%`;
            this.bpUploading = true;
          }
        });
    }
  }

  deletebp() {
    this.baseInfo.bp = '';
    this.bpName = '';
    krData.utls.getService('$timeout')(() => {
      $validation.validate(this.baseInfo.form.bp);
    });
  }

  privilege() {
    if (this.privileges) {
      this.baseInfo.privilege = 'MUST_APPLY';
    } else {
      this.baseInfo.privilege = 'INVESTOR';
    }
  }

  isActive() {
    if ($validation.checkValid(this.form) && this.readed) {
      return true;
    }
    return false;
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

  resetClaim() {
    this.claimProject = undefined;
    this.claimer = undefined;
    this.isClaiming = false;
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
        this.$window.scrollTo(0, this.$window.scrollX);
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
        this.loadSimilarProjects(this.claimProject.industry);
      })
      .catch((err) => {
        krData.Alert.alert(`认领公司失败:${err.msg}`);
          this.step = 4;
      });
  }
  call110(param) {
    this['110'] = param;
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
        this.loadSimilarProjects(this.baseInfo.industry);
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
      .then(() => {
        this.step = 4;
        this.project.loadFinance(this.$stateParams.id, 'auditing')
          .then((financeData) => {
            this.financeInfo = financeData;
          });
      })
      .catch((err) => { krData.Alert.alert(`申请融资失败：${err.msg}`); });
  }

  prev() {
    this.step--;
    this.$window.scrollTo(0, this.$window.scrollX);
  }
  next(form) {
    this.$window.scrollTo(0, this.$window.scrollX);
    switch (this.step) {
      case 1:
        this.resetClaim();
        this.go(2, form);
        break;
      case 2:
        if (!this.validate(this.user.form)) return;
        if (!this.isClaiming) {
          this.saveBaseInfo(form);
        } else {
          this.claimRemote();
        }

        // if (this.isFunder() && this.needFinance()) {
        //   this.go(3, form);
        // } else if (!this.isClaiming) {
        //   this.saveBaseInfo(form);
        // } else {
        //   this.claimRemote();
        // }
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
        label: `<div>
          <div class="suggest-logo"><img src='${com.logo}' /></div>
          <div class="suggest-project-text">
            <p><span class="suggest-name">${com.name}</span><span class="suggest-industry">${that.getIndustry(com.industry)}</span></p>
            <p class="brief">${com.brief}</p>
          </div>
          </div> `,
        value: com.name,
        obj: com,
      };
    });
  }

  loadSimilarProjects(industry) {
    this.project.similarProjects(industry)
      .then(data => (this.similarProjects = data));
  }

  searchClaimList() {
    const baseInfo = this.baseInfo;
    const searchObj = {
      name: baseInfo.name,
      fullName: baseInfo.fullName,
      ios: baseInfo.ios,
      website: baseInfo.website,
      weixin: baseInfo.weixin,
    };
    this.removeProps(searchObj);
    this.project.suggestClaim(searchObj)
      .then(list => {
        this.claimList = list;
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

  showMore(){
    this.moreInfo = !this.moreInfo;
  }

  announcement() {
    const vm = this;
    this.announcementDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/createProject/templates/announcement.html\'">/div>',
      plain: true,
      closeByDocument:false,
      closeByEscape: false,
      width: 727,
      height: 605,
      appendTo: '#createProjectWrapper',
      controller: announcementController,
      controllerAs: 'vm',
    });

    function announcementController() {
      this.read = false;
      this.close = () => {
        if (this.read) {
          vm.announcementDialog.close();
        }
      };
    }
  }

}
