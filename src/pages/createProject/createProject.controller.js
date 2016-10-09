import krData from 'krData';

const $validation = krData.utls.getService('$validation');
const PROJECT_TYPE = krData.utls.getService('PROJECT_TYPE');
function isInvalid(ctl) {
  return ctl ? ctl.$invalid : false;
}

function validate(ctl) {
  $validation.validate(ctl);
}

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', '$scope')
export default class CreateProjectController {

  autocompleteOptions = {
    suggest: this.suggest.bind(this),
    full_match: angular.noop,
  };

  baseInfo = {};
  user = {};

  step =3;

  constructor() {
    this.baseInfo.financeNeed = this.FINANCE_NEED.UNKNOWN;
    this.setProjectTypeValidator();
    this.setApplinkValidator();
    this.watchCompanyType();
    this.watchApplink();
  }


  template = `
    <div>
      <img src='' />
      <div class="suggest-project-text">
        <p><span>36氪</span><span>电子商务</span></p>
        <p class="brief">为创业者提供更好的服务</p>
      </div>
    </div>
  `

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

  go(step, form) {
    if (this.validate(form)) {
      this.step = step;
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


  suggest() {
    return [
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky',
        obj: { name: 'skyname' },
      },
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky2',
        obj: { name: 'skyname' },
      },
      {
        label: this.$sce.trustAsHtml(this.template),
        value: 'sky3',
        obj: { name: 'skyname' },
      },
    ];
  }

}
