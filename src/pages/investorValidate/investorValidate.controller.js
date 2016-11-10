import krData from 'krData';
import ProjectService from '../project/project.service';

@Inject('$sce', 'FINANCE_NEED', 'PROJECT_TYPE', 'step', 'financeState', 'type', '$window',
  '$scope', '$q', '$filter', '$stateParams', '$state', '$validation')
export default class investorValidateController {



  constructor() {
    this.init();
  }

  projectService = new ProjectService();

  init() {
    this.companyIndustry = this.$scope.root.COMPANY_INDUSTRY_META;

    this.followPhase = this.$scope.root.COMPANY_SEARCH_PHASE_META;

    this.investorRole = this.$scope.root.INVESTOR_ROLE_META;


    this.step = 1;

    this.baseInfo = {
      singleInvestUnit: 'CNY',
      investorRoleEnum: 'ORG_INVESTOR'
    };

    this.auditStatus = 'auditing';

    this.autocompleteOptions = {
      suggest: this.suggest.bind(this),
      on_select: this.onSelect.bind(this),
      auto_select_first: true,
      full_match: (item, word) => item.value.toLowerCase() === word.toLowerCase(),
    };

    this.getUser();
    this.setBiggerValidator();
    this.watchInvestAmountMin();

  }

  suggest(kw) {
    const defered = this.$q.defer();
    this.projectService.suggestOrg(kw).then((list) => {
      defered.resolve(this.makeSuggestResult(kw, list.slice(0, 5)));
    });
    return defered.promise;
  }

  makeSuggestResult(kw, list) {
    const that = this;
    return list.map(function makeLabel(val) {
      console.log(val);
      return {
        label: that.$sce.trustAsHtml(
          `<div class="suggest-label suggest-label-investment">
            <span>${val.name}</span>
          </div>`
        ),
        value: val.name,
        obj: val,
      };
    });
  }

  onSelect(selectedItem) {
    console.log(selectedItem);
    this.baseInfo.orgId = selectedItem.obj.id;
    this.baseInfo.orgName = selectedItem.obj.name;
  }

  prev() {
    this.step = 1;
  }

  setBiggerValidator() {
    this.$validation.setExpression({
      bigger: (number) => {
        if (angular.isUndefined(number) || number === '') {
          return true;
        }
        number = parseFloat(number);
        if (number >= parseFloat(this.baseInfo.singleInvestMin)) {
          return true;
        }
        return false;
      },
    }).setDefaultMsg({
      bigger: {},
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
    this.suggestInvestor.forEach((item,i) => {
      if(index+'' === i+'') {
        item.active = true;
      }else {
        item.active = false;
      }
    })
    this.baseInfo.selectedIndustry = this.suggestInvestor[index].industryEnumList;
    this.baseInfo.selectedPhase = this.suggestInvestor[index].phaseEnumList;
    this.baseInfo.relatedId = this.suggestInvestor[index].id;
    this.baseInfo.relatedEntityName = this.suggestInvestor[index].orgName;
    this.baseInfo.relatedName = this.suggestInvestor[index].name;
    this.baseInfo.relatedPosition = this.suggestInvestor[index].position;
  }

  getUser() {
    krData.User.getUserInfo().then(data => {
      delete data.phone;
      this.userData = data;

      //this.getState();
    }).catch(err => {
      if(err.code === 403) {
        this.$scope.root.user.ensureLogin();
        console.log('未登录');
      }
    });
    /*this.user.then(data => {
      console.log(data);
    });*/
  }

  getState() {
    this.projectService.getState().then(data => {
      console.log(data);
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

      }
    }).catch(err => {
      console.log(err);
    });
  }

  getCode() {
    // 获取验证码
      this.wait = 2;
      var interval = setInterval(() => {
        this.$scope.$apply(() => {
          this.wait--;
          if (this.wait === 0) {
            clearInterval(interval);
            this.wait = 0;
          }
        });
      }, 1000);
      this.projectService.getMsgCode({
        phone: this.baseInfo.phone
      }).then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err);
      });
  }

  validatePhone() {
    /*验证手机号*/
    this.projectService.validateMsgCode({
      code: this.baseInfo.code,
      phone: this.baseInfo.phone
    }).then(data => {
      console.log(data);
      this.codeError = false;
      this.getSuggestInvestor();
    }).catch(err => {
      console.log(err);
      krData.Alert.alert(err.msg);
      this.codeError = true;
    });
  }

  getSuggestInvestor() {
    this.projectService.suggestInvestor({
      name: this.baseInfo.realName,
      orgName: this.baseInfo.org || ''
    }).then(data => {
      console.log(data);
      this.suggestInvestor = data;
      this.step = 2;
    }).catch(err => {
      console.log(err);
    });
  }


  /*验证手机号是否合法*/
  submitInfo() {
    this.$validation.validate(this.baseInfoForm).catch(() => {
      return this.$q.reject();
    }).then(() => {
      this.validatePhone();
    });
    /*if(!this.checkForm('baseInfoForm'))return;*/
  }

  /*提交认证*/
  submitValidate() {
    this.$validation.validate(this.financeInfo.form).catch(() => {
      console.log('Submit fail');
      return this.$q.reject();
    }).then(() => {
      console.log('Submit suc');
      this.submitRequest();
    });
  }

  submitRequest() {
    var params = Object.assign({
      phaseEnumList: this.baseInfo.selectedPhase.join(','),
      industryEnumList: this.baseInfo.selectedIndustry.join(',')
    },this.baseInfo);
    delete params.selectedPhase;
    delete params.selectedIndustry;
    console.warn(params);
    this.projectService.submitValidate(params).then(data => {
      console.log(data);
      this.step = 3;
    }).catch(err => {
      if(err && err.msg) {
        krData.Alert.alert(err.msg);
      }
      console.log(err);
    });
  }

  uploadBp($files) {
    const name = this.$scope.vm.baseInfo.name || this.name;
    let validObj = null;
    if ($files.length) {
     /* validObj = krData.utls.validateBP($files[0]);
      if (!validObj.valid) {
        krData.Alert.alert(validObj.msg);
        return;
      }*/
      krData.utls.uploadImage($files[0])
        .then(data => {
          console.warn(data);
          this.baseInfo.businessCard = data.src;
          /*this.finance.bp = data.src;
          this.bpName = `[${name}]商业计划书.pdf`;*/
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
