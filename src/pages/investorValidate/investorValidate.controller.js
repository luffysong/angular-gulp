import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$sce', '$scope', '$q', '$stateParams', '$state', '$validation')
export default class investorValidateController {

  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.baseInfo = {
      singleInvestUnit: 'CNY',
    };

    this.auditStatus = '';

    this.companyIndustry = this.$scope.root.FOLLOW_AREA_META;

    this.followPhase = this.$scope.root.COMPANY_SEARCH_PHASE_META;

    this.investorRole = this.$scope.root.INVESTOR_ROLE_META;

    this.step = 1;

    this.currentIndex = 0;

    this.autocompleteOptions = {
      suggest: this.suggest.bind(this),
      on_select: this.onSelect.bind(this),
      auto_select_first: true,
      full_match: (item, word) => {
        if (item && item.value) {
          return item.value.toLowerCase() === word.toLowerCase();
        }
      },
    };

    this.getUser();
    this.setBiggerValidator();
    this.watchInvestAmountMin();
  }

  suggest(kw) {
    const defered = this.$q.defer();
    this.projectService.suggestComAndOrg(kw).then((list) => {
      defered.resolve(this.makeSuggestResult(kw, list.slice(0, 5)));
    });
    return defered.promise;
  }

  makeSuggestResult(kw, list) {
    const that = this;
    return list.map(function makeLabel(val) {
      var entityType = val.entityType === 'COMPANY_INVEST_DEPT' ? '公司':'机构'
      return {
        label: that.$sce.trustAsHtml(
          `<div class="suggest-label suggest-label-investment">
            <span>${val.name} | ${entityType}</span>
          </div>`
        ),
        value: val.name,
        obj: val,
      };
    });
  }

  onSelect(selectedItem) {
    this.baseInfo.orgId = selectedItem.obj.id;
    this.baseInfo.orgName = selectedItem.obj.name;
    this.baseInfo.orgType = selectedItem.obj.entityType;
  }

  prev() {
    this.step = 1;
    this.clearInfo();
  }

  clearInfo() {
    this.baseInfo.selectedIndustry = [];
    this.baseInfo.selectedPhase = [];
  }

  setBiggerValidator() {
    this.$validation.setExpression({
      bigger: (number) => {
        if (angular.isUndefined(number) || number === '' || !this.baseInfo.singleInvestMin) {
          return true;
        }
        number = parseFloat(number);
        if (number >= parseFloat(this.baseInfo.singleInvestMin)) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      bigger: {
        error: '最大投资金额必须大于最小投资金额'
      },
    });
  }

  watchInvestAmountMin() {
    this.$scope.$watch('vm.baseInfo.singleInvestMin', () => {
      if (this.financeInfo && this.financeInfo.form) {
        this.$validation.validate(this.financeInfo.form.investAmountMax);
      }
    });
  }

  selectItem(index) {
    this.suggestInvestor.forEach((item, i) => {
      if (`${index}` === `${i}`) {
        item.active = !item.active;
      } else {
        item.active = false;
      }
    });
    this.getField();
  }

  getField() {
    this.initField();
    this.suggestInvestor.forEach((item,index) => {
      if (item.active) {
        this.baseInfo.selectedIndustry = angular.copy(this.suggestInvestor[index].industryEnumList);
        this.baseInfo.selectedPhase = angular.copy(this.suggestInvestor[index].phaseEnumList);
        this.baseInfo.relatedId = angular.copy(this.suggestInvestor[index].id);
        this.baseInfo.relatedEntityName = angular.copy(this.suggestInvestor[index].orgName);
        this.baseInfo.relatedName = angular.copy(this.suggestInvestor[index].name);
        this.baseInfo.relatedPosition = angular.copy(this.suggestInvestor[index].position);
        this.baseInfo.singleInvestMin = angular.copy(this.suggestInvestor[index].singleInvestMin);
        this.baseInfo.singleInvestMax = angular.copy(this.suggestInvestor[index].singleInvestMax);
        this.baseInfo.singleInvestUnit = this.suggestInvestor[index].singleInvestUnit ?
          angular.copy(this.suggestInvestor[index].singleInvestUnit) : 'CNY';
      }
    });
  }

  initField() {
    this.baseInfo.selectedIndustry = [];
    this.baseInfo.selectedPhase = [];
    this.baseInfo.relatedId = '';
    this.baseInfo.relatedEntityName = '';
    this.baseInfo.relatedName = '';
    this.baseInfo.relatedPosition = '';
    this.baseInfo.singleInvestMin = '';
    this.baseInfo.singleInvestMax = '';
    this.baseInfo.singleInvestUnit = 'CNY';
  }

  getUser() {
    krData.User.getUserInfo().then(data => {
      this.userData = data;
      this.getState();
    }).catch(err => {
      if (err.code === 403) {
        this.$scope.root.user.ensureLogin();
      }
    });
  }

  reSubmit() {
    this.step = 1;
  }
  getState() {
    this.projectService.getState().then(data => {
      switch (data.state) {
        case 'PENDING':
          this.step = 3;
          this.auditStatus = 'auditing';
          break;
        case 'PASS':
          this.step = 3;
          this.auditStatus = 'audited';
          break;
        case 'REJECT':
          this.step = 3;
          this.auditStatus = 'auditFail';
          this.failReason = data.reason;
          break;

      }
    }).catch();
  }

  getCode() {
    // 获取验证码
    this.wait = 60;
    const interval = window.setInterval(() => {
      this.$scope.$apply(() => {
        this.wait--;
        if (this.wait === 0) {
          clearInterval(interval);
          this.wait = 0;
        }
      });
    }, 1000);
    this.projectService.getMsgCode({
      phone: this.baseInfo.phone,
    });
  }

  validatePhone() {
    /* 用户已绑定手机号 */
    if (this.userData.phone){
      this.getSuggestInvestor();
      this.step = 2;
      return;
    }
    /* 验证手机号 */
    this.projectService.validateMsgCode({
      code: this.baseInfo.code,
      phone: this.baseInfo.phone,
    }).then(() => {
      this.codeError = false;
      this.getSuggestInvestor();
    }).catch(err => {
      krData.Alert.alert(err.msg);
      this.codeError = true;
    });
  }

  getSuggestInvestor() {
    this.projectService.suggestInvestor({
      name: this.baseInfo.realName,
      orgName: this.baseInfo.orgName
    }).then(data => {
      this.suggestInvestor = data;
      this.step = 2;
    });
  }


  /* 验证手机号是否合法 */
  submitInfo() {
    this.$validation.validate(this.baseInfoForm).catch(() => {
      return this.$q.reject();
    }).then(() => {
      this.validatePhone();
    });
  }

  /* 提交认证 */
  submitValidate() {
    this.$validation.validate(this.financeInfo.form).catch(() => {
      return this.$q.reject();
    }).then(() => {
      this.submitRequest();
    });
  }

  submitRequest() {
    const params = Object.assign({
      phaseEnumList: this.baseInfo.selectedPhase.join(','),
      industryEnumList: this.baseInfo.selectedIndustry.join(',')
    }, this.baseInfo);
    delete params.selectedPhase;
    delete params.selectedIndustry;
    /* 个人投资人过滤投资机构和职位 */
    if (params.investorRoleEnum !== 'ORG_INVESTOR') {
      delete params.orgName;
      delete params.orgId;
      delete params.position;
    }
    this.projectService.submitValidate(params).then(() => {
      this.step = 3;
      this.auditStatus = 'auditing';
    }).catch(err => {
      if (err && err.msg) {
        krData.Alert.alert(err.msg);
      }
    });
  }

  uploadBp($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0],{
        maxSize: '5',
      }).then(data => {
        this.baseInfo.businessCard = data.src;
      }, err => {
        this.bpUploading = false;
        krData.Alert.alert(`上传名片失败:${err.msg}`);
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
}
