import krData from 'krData';
import FinanceVM from './financeApply.vm';
import CreateProject from './createProject.service';
const $validation = krData.utls.getService('$validation');
const PROJECT_TYPE = krData.utls.getService('PROJECT_TYPE');
const ROLE_META = krData.utls.getService('ROLE_META');
const ROLE = krData.utls.getService('ROLE');
function isInvalid(ctl) {
  return ctl ? ctl.$invalid : false;
}

function validate(ctl) {
  $validation.validate(ctl);
}

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', '$scope', '$q', '$filter')
export default class CreateProjectController {

  autocompleteOptions = {
    suggest: this.suggest.bind(this),
    full_match: angular.noop,
    on_select: item => {
      const obj = item.obj;
      this.baseInfo.brief = obj.brief;
      this.baseInfo.logo = obj.logo;
      this.baseInfo.website = obj.website;
      this.baseInfo.industry = obj.industry;
    },
  };

  CLAIM_ROLE = [ROLE_META[0], ROLE_META[1]];

  project = new CreateProject();
  baseInfo = {};
  user = {};

  financeVM = new FinanceVM(this.$scope);
  step = 1;


  constructor() {
    this.initBaseInfo();
    this.setProjectTypeValidator();
    this.setApplinkValidator();
    this.watchCompanyType();
    this.watchApplink();
  }

  initBaseInfo() {
    this.baseInfo = {
      financingNeed: this.FINANCE_NEED.UNKNOWN,
    };
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

  isMaintainer() {
    return this.baseInfo.companyRole === ROLE.MEMBER ||
      this.user.companyRole === ROLE.MEMBER;
  }

  notSelectRole() {
    return angular.isUndefined(this.baseInfo.companyRole);
  }

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

  watchCompanyType() {
    this.$scope.$watch('vm.baseInfo.companyType', (nv) => {
      if (!nv) return;
      const website = this.baseInfo.form.website;
      if (isInvalid(website)) {
        validate(website);
      }
    });
  }

  watchApplink() {
    this.$scope.$watch('[vm.baseInfo.ioslink, vm.baseInfo.androidlink]', (nv) => {
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
        });
    }
  }

  uploadIdCard($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then(data => {
          this.user.userBusinessCard = data.src;
        });
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
        if (this.baseInfo.ioslink || this.baseInfo.androidlink) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      applink: {},
    });
  }

  claim(company) {
    this.claimProject = company;
  }

  go(step, form) {
    if (this.validate(form)) {
      this.step = step;
    }
  }

  saveBaseInfo(form) {
    if (this.validate(form)) {
      const projectInfo = angular.extend({}, this.baseInfo, this.user);
      delete projectInfo.form;
      this.project.create(projectInfo)
        .then(() => {
          this.step = 4;
        })
        .catch((err) => {
          krData.Alert.alert(`创建公司失败:${err.msg}`);
        });
    }
  }

  next(form) {
    switch (this.step) {
      case 1:
        this.go(2, form);
        break;
      case 2:
        if (this.isFunder() && this.needFinance()) {
          this.go(3, form);
        } else {
          this.saveBaseInfo(form);
        }
        break;
      case 3: break;
      default: return;
    }
  }
  validate(form) {
    if (!$validation.checkValid(form)) {
      $validation.validate(form);
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
