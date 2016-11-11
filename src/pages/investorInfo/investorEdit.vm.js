import krData, { API, utls, Alert } from 'krData';
const getService = utls.getService;
const $validation = getService('$validation');
const CURRENCY_UNIT = getService('CURRENCY_UNIT');
let investorInfoService = null;


export default class InvestorEditVM {
  constructor(data) {
    this.copyData = angular.copy(data);
    this.init();
    investorInfoService = getService('investorInfoService');
  }

  selectProject = null;
  selectOrg = null;

  init() {
    this.setRequiredList();
    this.suggestOrgOptions = {
      suggest: this.suggest.bind(this, '/suggest/org'),
      full_match: (item, value) => item.obj.name.toLowerCase() === value,
      on_select: item => (this.selectOrg = item.obj),
      on_leaveSelect: () => (this.selectOrg = null),
    };
    this.suggestComOptions = {
      suggest: this.suggest.bind(this, '/suggest/company'),
      full_match: (item, value) => item.obj.name.toLowerCase() === value,
      on_select: item => (this.selectProject = item.obj),
      on_leaveSelect: () => (this.selectProject = null),
    };

    this.suggestCityOptions = {
      suggest: this.suggestCity.bind(this),
      full_match: (item, value) => item.obj && item.obj.name.toLowerCase() === value,
      on_select: item => {
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

  setRequiredList() {
    $validation.setExpression({
      requiredList: (value, scope, element, attrs, param) => {
        const list = scope.$eval(param);
        if (list && !list.length) {
          return false;
        }
        return true;
      },
    })
      .setDefaultMsg({
        requiredCity: {},
      });
  }
  enterBase() {
    this.editBase = true;
    this.baseData = {};
    krData.utls.mapProps(['name', 'avatar', 'position', 'orgName', 'city'],
    this.copyData.basic, this.baseData);
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
        return investorInfoService.api.updateBasic({
          id: this.copyData.investor.id,
        }, {
          basicData,
        });
      })
      .then(() => {
        this.success();
      })
      .catch((err) => this.fail(err));
  }

  enterPrefer() {
    this.editPrefer = true;
    this.preferData = this.copyData.investPreference;
    this.preferData.singleInvestUnit = CURRENCY_UNIT.CNY;
  }

  cancelPrefer() {
    this.editPrefer = false;
  }

  savePrefer() {
    $validation.validate(this.preferData.form)
      .then(() => {
        const basicData = angular.copy(this.baseData);
        basicData.city = basicData.city.join(',');
        return investorInfoService.api.updateBasic({
          id: this.copyData.investor.id,
        }, {
          basicData,
        });
      })
      .then(() => {
        this.success();
      })
      .catch((err) => this.fail(err));
    this.editPrefer = false;
  }

  fail(err) {
    if (API.fail(err.code)) {
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
        '<div><img ng-if="result.obj.logo" ng-src="{{result.obj.logo || ' +
        '\'/images/org-logo.png\'}}">{{result.obj.name}}</div>',
      }))
    );
  }

  suggestCity(kw) {
    return new API('/suggest/city').query({
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

