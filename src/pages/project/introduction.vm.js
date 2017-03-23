import krData from 'krData';
export default class IntroductionVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  isEmpty = false;
  constructor(fn, data, $scope) {
    super(data);
    this.$scope = $scope;
    this.ngDialog = fn;
    this.initData(data);
  }

  props = ['id', 'intro', 'fullName', 'scale',
    'operationStatus', 'address1', 'address2',
    'startDate', 'productService', 'userMarket', 'businessMode', 'coreSource', 'operationData'];

  initData(data) {
    this.mapProps(this.props, data, this);
    this.isEmpty = krData.utls.isEmpty(data);
    this.startDate = parseInt(data.startDateDesc, 10);
    this.operationStatus = data.operationStatusEnum || krData.META.OPERATION_STATUS.OPEN;
    this.scale = data.scale;
    this.loadArea0();
    this.watch();

    this.origCompanyData = {};
    this.companyIntroduce = {};
    angular.copy(data, this.origCompanyData);
    this.origCompanyData.operationStatus = this.operationStatus;
    this.data = data;
    this.companyIntroduce.id = data.id;
    if (data.companyIntroduce) {
      this.productService = data.companyIntroduce.productService;
      this.userMarket = data.companyIntroduce.userMarket;
      this.businessMode = data.companyIntroduce.businessMode;
      this.coreSource = data.companyIntroduce.coreSource;
      this.operationData = data.companyIntroduce.operationData;
    }
    this.setIntroduce();
  }

  setIntroduce() {
    this.hasIntroduce = krData.utls.one(this.data.companyIntroduce, this.props.slice(1));
  }

  setData(data) {
    this.originalData = {};
    angular.copy(data, this.originalData);
  }

  recovery() {
    this.originalData.startDate = parseInt(this.originalData.startDateDesc, 10);
    angular.extend(this, this.originalData);
    const tempData = {};
    angular.copy(this.origCompanyData, tempData);
    angular.extend(this, tempData.companyIntroduce);
    angular.extend(this.data, tempData);
    this.operationStatus = tempData.operationStatus;
  }

  watch() {
    this.$scope.$watch(() => this.address1, (nv) => {
      if (angular.isDefined(nv)) {
        this.loadArea1(nv);
      }
    });
  }
  loadArea0() {
    this.projectService.getArea(0)
      .then(data => {
        this.cities0 = data;
      });
  }
  loadArea1(id) {
    this.projectService.getArea(id)
      .then(data => {
        this.cities1 = data;
      });
  }

  scaleClick(item) {
    this.scale = item;
    this.scaleHidden = true;
    krData.utls.getService('$timeout')(() => {
      this.scaleHidden = false;
    }, 500);
  }

  save() {
    const vm = this;
    if (!this.startDate) {
      this.startDate = '';
    }
    this.validate2().then(() => {
      vm.investorDialog = this.ngDialog.open({
        template: '<div ng-include="\'/pages/project/templates/ensureSave.html\'" center></div>',
        plain: true,
        appendTo: '#projectDetailWrapper',
        className: 'ensureSave-dialog',
        controller: saveController,
        controllerAs: 'vm',
      });
    }).catch(() => {
      krData.Alert.alert('表单不合法,请更正红色表示部分');
    });

    function saveController() {
      this.cancel = () => {
        vm.investorDialog.close();
      };
      this.remindCancel = () => {
        vm.remindDialog.close();
      };
      this.ensure = () => {
        vm.projectService.editBase({
          id: vm.id,
        }, vm.mapProps(vm.props, vm))
          .then(() => {
            vm.projectService.editIntroduce({
              id: vm.id,
            }, vm.mapProps(vm.props, vm))
              .then(() => {
                vm.recovery();
                krData.Alert.success('数据保存成功');
                vm.isEdit = !vm.isEdit;
                vm.investorDialog.close();
              });
          }, (data) => {
            if (data.code === 1) {
              vm.investorDialog.close();
              vm.remindDialog = vm.ngDialog.open({
                template: '<div ng-include="\'/pages/project/templates/remind.html\'" center></div>',
                plain: true,
                appendTo: '#projectDetailWrapper',
                className: 'remind-dialog',
                controller: saveController,
                controllerAs: 'vm',
              });
            } else {
              krData.Alert.alert(data.msg);
            }
          });
      };
    }
  }


  isUndefined(obj) {
    return angular.isUndefined(obj);
  }
}

