import krData, { API, utls, Alert } from 'krData';
const getService = utls.getService;
const $validation = getService('$validation');
const CURRENCY_UNIT = getService('CURRENCY_UNIT');
const PROJECT_TYPE = krData.utls.getService('PROJECT_TYPE');
const ENTITY_TYPE = {
  INDIVIDUAL: 'INDIVIDUAL',
  ORGANIZATION: 'ORGANIZATION',
  COMPANY: 'COMPANY',
};

let investorInfoService = null;

function validate(ctrl) {
  return $validation.validate(ctrl);
}


export default class InvestorEditVM {
  constructor(data, $scope) {
    this.$scope = $scope;
    this.copyData = angular.copy(data);
    this.init();
    investorInfoService = getService('investorInfoService');
  }

  selectProject = null;
  selectOrg = null;
  ENTITY_TYPE = ENTITY_TYPE;

  init() {
    this.setRequiredList();

    // baseData
    this.setBaseOrgOptions();
    this.setSuggestCityOptions();

    // prefer
    this.setSuggestLabelOptions();

    // caseData
    this.setCaseComOptions();
    this.setCaseEntityOrgOptions();
    this.setCaseEntityComOptions();
    this.watchEntityType();


    this.setBiggerValidator();
    this.watchSingleMin();
    this.watchCompanyType();
    this.setApplinkValidator();
    this.watchApplink();
  }

  isOrgInvestor() {
    return this.baseData.entityType === ENTITY_TYPE.ORGANIZATION;
  }

  isWeb() {
    return this.caseData.companyType === PROJECT_TYPE.WEB;
  }

  isApp() {
    return this.caseData.companyType === PROJECT_TYPE.APP;
  }

  isWebApp() {
    return this.caseData.companyType === PROJECT_TYPE.WEB_APP;
  }

  isWeixin() {
    return this.caseData.companyType === PROJECT_TYPE.WECHAT;
  }

  isIdea() {
    return this.caseData.companyType === PROJECT_TYPE.IDEA;
  }

  hasRole() {
    return this.caseData.companyRole || this.user.companyRole;
  }

  // 移除与所选产品类型不相关的属性
  removeProps(obj) {
    let props = [];
    const all = ['iosLink', 'androidLink', 'intro', 'website'];
    switch (this.caseData.companyType) {
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
        props = [];
    }
    const copy = krData.utls.mapProps(props, obj);
    all.forEach(v => delete obj[v]);
    angular.extend(obj, copy);
  }

  setApplinkValidator() {
    $validation.setExpression({
      applink: () => {
        if (this.caseData.iosLink || this.caseData.androidLink) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      applink: {},
    });
  }

  watchCompanyType() {
    this.$scope.$watch('investorEditVM.caseData.companyType', (nv) => {
      if (!nv) return;

      if (nv === PROJECT_TYPE.APP || nv === PROJECT_TYPE.WEB_APP) {
        if (this.caseData.iosLink || this.caseData.androidLink) {
          krData.utls.getService('$timeout')(() => {
            validate(this.caseData.form.ioslink);
            validate(this.caseData.form.androidlink);
          });
        }
      }
    });
  }

  watchApplink() {
    this.$scope.$watch('[investorEditVM.caseData.iosLink, investorEditVM.caseData.androidLink]',
      (nv) => {
        if (angular.isUndefined(nv[0]) && angular.isUndefined(nv[1])) return;
        const ioslink = this.caseData.form.ioslink;
        const androidlink = this.caseData.form.androidlink;
        validate(ioslink);
        validate(androidlink);
      });
  }

  setBaseOrgOptions() {
    this.baseOrgOptions = this._getSuggestOrgOptions({
      on_select: (item) => {
        this.baseData.selectOrg = item.obj;
      },
      on_leaveSelect: () => {
        this.baseData.selectOrg = null;
        this.baseData.orgId = null;
      },
    });
  }

  setCaseComOptions() {
    this.caseComOptions = this._getSuggestComOptions({
      on_select: (item) => {
        this.caseData.selectCom = item.obj;
        this.caseData.companyType = null;
      },
      on_leaveSelect: () => {
        this.caseData.selectCom = null;
        this.caseData.companyType = getService('PROJECT_TYPE').WEB;
      },
    });
  }

  setCaseEntityComOptions() {
    this.caseEntityComOptions = this._getSuggestComOptions({
      on_select: (item) => {
        this.caseData.selectEntity = item.obj;
      },
      on_leaveSelect: () => {
        this.caseData.selectEntity = null;
      },
    });
  }

  setCaseEntityOrgOptions() {
    this.caseEntityOrgOptions = this._getSuggestOrgOptions({
      on_select: (item) => {
        this.caseData.selectEntity = item.obj;
      },
      on_leaveSelect: () => {
        this.caseData.selectEntity = null;
      },
    });
  }

  _getSuggestComOptions(options) {
    return {
      auto_select_first: true,
      suggest: this.suggest.bind(this, '/suggest/company'),
      full_match: (item, value) => item.obj.name.toLowerCase() === value.toLowerCase(),
      on_select: options.on_select,
      on_leaveSelect: options.on_leaveSelect,
    };
  }

  _getSuggestOrgOptions(options) {
    return {
      auto_select_first: true,
      suggest: this.suggest.bind(this, '/suggest/org'),
      full_match: (item, value) => item.obj.name.toLowerCase() === value.toLowerCase(),
      on_select: options.on_select,
      on_leaveSelect: options.on_leaveSelect,
    };
  }

  setSuggestCityOptions() {
    this.suggestCityOptions = {
      auto_select_first: true,
      suggest: this.suggestOnlyText.bind(this, '/suggest/city'),
      full_match: (item, value) => item.obj && item.obj.name.toLowerCase() === value.toLowerCase(),
      on_select: item => {
        if (this.baseData.city.length > 10) {
          Alert.alert('最多可选10个城市');
        }
        if (this.baseData.city.every(city => city !== item.obj.name)) {
          this.baseData.city.push(item.obj.name);
          this.baseData.cityText = '';
        } else {
          Alert.alert(`${item.obj.name} 已选`);
        }
      },
      on_leaveSelect: () => (this.selectProject = null),
    };
  }


  setSuggestLabelOptions() {
    this.suggestLabelOptions = {
      auto_select_first: true,
      suggest: this.suggestOnlyText.bind(this, '/suggest/label'),
      full_match: (item, value) => item.obj && item.obj.name.toLowerCase() === value.toLowerCase(),
      on_select: item => {
        if (this.preferData.focusIndustry.every(label => label !== item.obj.name)) {
          this.preferData.focusIndustry.push(item.obj.name);
          this.preferData.labelText = '';
        } else {
          Alert.alert(`${item.obj.name} 已选`);
        }
      },
      on_leaveSelect: () => (this.selectProject = null),
    };
  }

  selectPreferPhase() {
    const item = this.preferData.preferPhaseItem;
    if (this.preferData.preferPhase.every(phase => phase.desc !== item.desc)) {
      this.preferData.preferPhase.push(item);
    } else {
      Alert.alert(`${item.desc} 已选`);
    }
    this.preferData.preferPhaseItem = null;
  }

  uploadAvatar($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then((data) => {
          this.baseData.avatar = data.src;
        })
        .catch((err) => {
          krData.Alert.alert(err.msg);
        });
    }
  }

  watchSingleMin() {
    this.$scope.$watch('investorEditVM.preferData.singleInvestMin', (nv) => {
      if (nv && this.preferData.form) {
        $validation.validate(this.preferData.form.singleInvestMax);
      }
    });
  }

  watchEntityType() {
    this.$scope.$watch('investorEditVM.caseData.entityType', (nv) => {
      if (nv) {
        this.caseData.selectEntity = null;
        this.caseData.entityName = '';
        this.caseData.entityId = '';
      }
    });
  }

  setBiggerValidator() {
    $validation.setExpression({
      bigger: (number) => {
        if (angular.isUndefined(number) || number === '') {
          return true;
        }
        number = parseFloat(number);
        if (number >= parseInt(this.preferData.singleInvestMin, 10)) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      bigger: {},
    });
  }

  setRequiredList() {
    $validation.setExpression({
      requiredList: (value, scope, element, attrs, param) => {
        const args = param.split(':');
        const list = scope.$eval(args[0]);
        const count = parseInt(args[1], 10) || 10;
        if (list && !list.length) {
          return false;
        } else if (list.length > count) {
          return false;
        }
        return true;
      },
    })
      .setDefaultMsg({
        requiredList: {},
      });
  }
  enterBase() {
    this.editBase = true;
    this.baseData = {};
    krData.utls.mapProps(['name', 'avatar', 'position', 'orgName', 'city', 'orgId', 'entityType'],
    angular.copy(this.copyData.basic), this.baseData);
    this.baseData.city = this.baseData.city || [];
  }

  cancelBase() {
    this.editBase = false;
  }

  saveBase() {
    $validation.validate(this.baseData.form)
      .then(() => {
        const basicData = angular.copy(this.baseData);
        basicData.city = basicData.city.join(',');
        if (basicData.selectOrg) {
          basicData.orgId = basicData.selectOrg.id;
        }

        if (basicData.entityType === ENTITY_TYPE.INDIVIDUAL) {
          delete basicData.orgId;
          delete basicData.orgName;
        }
        delete basicData.form;
        delete basicData.selectOrg;
        delete basicData.cityText;
        return investorInfoService.api.updateBasic(null, basicData);
      })
      .then(() => {
        this.success();
        this.editBase = false;
      })
      .catch((err) => this.fail(err));
  }

  enterPrefer() {
    this.editPrefer = true;
    this.preferData = angular.copy(this.copyData.investPreference);
    this.preferData.singleInvestUnit = this.preferData.unit || CURRENCY_UNIT.CNY;
    delete this.preferData.unit;
    delete this.preferData.singleInvestAmount;
  }

  cancelPrefer() {
    this.editPrefer = false;
  }

  savePrefer() {
    $validation.validate(this.preferData.form)
      .then(() => {
        const preferData = angular.copy(this.preferData);
        delete preferData.form;
        delete preferData.preferPhaseItem;
        delete preferData.labelText;
        preferData.focusIndustry = preferData.focusIndustry.join(',');
        preferData.preferPhase = preferData.preferPhase.map(item => item.value).join(',');
        return investorInfoService.api.updatePrefer(null, preferData);
      })
      .then(() => {
        this.success();
        this.editPrefer = false;
      })
      .catch((err) => this.fail(err));
  }

  enterResume() {
    this.editResume = true;
    this.resumeData = {
      intro: this.copyData.basic.intro,
    };
  }

  cancelResume() {
    this.editResume = false;
  }

  saveResume() {
    $validation.validate(this.resumeData.form)
      .then(() => {
        const resumeData = angular.copy(this.resumeData);
        delete resumeData.form;
        return investorInfoService.api.updateIntro(null, resumeData);
      })
      .then(() => {
        this.success();
        this.editResume = false;
      })
      .catch((err) => this.fail(err));
  }

  enterCase() {
    this.editCase = true;
    this.caseData = {};
    this.caseData.companyType = getService('PROJECT_TYPE').WEB;
    this.caseData.entityType = this.ENTITY_TYPE.ORGANIZATION;
  }

  saveCase() {
    validate(this.caseData.form).then(() => {
      const caseData = angular.copy(this.caseData);
      caseData.investDate = `${caseData.startYear}-${caseData.startMonth}-01 00:00:00`;
      if (caseData.selectEntity) {
        caseData.entityId = caseData.selectEntity.id;
      }

      if (caseData.selectCom) {
        caseData.cid = caseData.selectCom.id;
        delete caseData.companyType;
      }

      delete caseData.selectEntity;
      delete caseData.selectCom;
      delete caseData.form;
      delete caseData.startYear;
      delete caseData.startMonth;
      this.removeProps(caseData);
      return investorInfoService.api.addInvestment(null, caseData);
    }).then(() => {
      this.success();
      this.editCase = false;
    }).catch((err) => {
      this.fail(err);
    });
  }

  cancelCase() {
    this.editCase = false;
  }


  fail(err) {
    if (angular.isDefined(err.code) && API.fail(err.code)) {
      Alert.alert(`数据保存失败：${err.msg}`);
    } else {
      Alert.alert('请填写必须的字段');
    }
  }

  success() {
    Alert.success('数据保存成功');
  }

  suggest(path, kw) {
    return new API(path).query({
      kw,
    }).then(list =>
      list.map(org => ({
        value: org.name,
        obj: org,
        label:
        '<div><img ng-src="{{result.obj.logo || ' +
        '\'/images/org-logo.png\'}}">{{result.obj.name}}</div>',
      }))
    );
  }

  suggestOnlyText(path, kw) {
    return new API(path).query({
      kw,
    }).then(list =>
      list.map(city => ({
        value: city.name,
        obj: city,
        label: '<div>{{result.obj.name}}</div>',
      }))
    );
  }
}

