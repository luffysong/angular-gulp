import krData, { API, utls, Alert } from 'krData';
const getService = utls.getService;
const $validation = getService('$validation');
const CURRENCY_UNIT = getService('CURRENCY_UNIT');


export default class InvestorEditVM {
  constructor(data) {
    this.copyData = angular.copy(data);
    this.init();
  }

  selectProject = null;
  selectOrg = null;

  init() {
    this.setRequiredCity();
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
        if (this.baseData.city.every(city => city.name !== item.obj.name)) {
          this.baseData.city.push(item.obj);
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

  setRequiredCity() {
    $validation.setExpression({
      requiredCity: () => {
        if (!this.baseData.city.length) {
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
        this.editBase = false;
      })
      .catch(() => this.fail());
  }

  enterPreference() {
    this.editPreference = true;
    this.preferData = {};
    this.preferData.currencyUnit = CURRENCY_UNIT.CNY;
  }

  cancelPreference() {
    this.editPreference = false;
  }

  savePreference() {
    this.editPreference = false;
  }

  fail() {
    Alert.alert('请填写必须的字段');
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
    return new API('/suggest/org').query({
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

