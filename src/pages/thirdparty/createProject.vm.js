import krData, { utls } from 'krData';
@Inject('$stateParams', 'resolveData', '$validation', '$scope', '$sce',
'$state', '$q', '$filter', 'ngDialog', 'user', '$timeout',
'thirdpartyIndexService','createProjectService')
export default class CreateProjectVM {
  constructor(fn) {
    this.ngDialog = fn;
    this.init();
  }
thirdparty;
project;
  init(){
      this.thirdparty = this.openSubProject;
  }

  openSubProject() {
    const vm = this;
    //弹出控制
    function saveController() {

      this.isRongzi = false;
      this.selectPro = false;
      this.privilege;
      this.service = vm.thirdpartyIndexService;

      this.getIndustry = function(industry) {
        return vm.$filter('industry')(industry);
      }
      this.makeSuggestResult =function(kw, list = []) {
        const that = this;
        return list.map(function mapList(com) {
          return {
            label: `<div>
              <img src='${com.logo}' />
              <div class="suggest-project-text">
                <p><span>${com.name}</span><span>${that.getIndustry(com.industry)}</span></p>
                <p class="brief">${com.brief}</p>
              </div>
              </div> `,
            value: com.name,
            obj: com,
          };
        });
      }

      this.suggest = function suggest(kw) {
        const deferred = vm.$q.defer();
        vm.projectService.suggest(kw).then((list) => {
          deferred.resolve(this.makeSuggestResult(kw, list));
        });

        return deferred.promise;
      }

      this.autocompleteOptions = {
        suggest: this.suggest.bind(this),
        auto_select_first: true,
        full_match: (item, word) => item.value.toLowerCase() === word.toLowerCase(),
        on_detach: () => this.setValue(),
        on_select: item => {
          const obj = item.obj;
          this.selectProject = obj;
          this.project.website =item.obj.website;
          this.project.cid = item.obj.id;
          this.selectPro = true;
          //angular.extend(this.project, obj);
            //this.project.website =item.obj.website;
        },
        on_leaveSelect: word => {
          if (this.selectProject) {
            this.project.website ='';
            delete this.project.cid;
            this.selectPro = false;
          }
        },
      };

      this.updateCancle = function () {
        vm.thirdpartyDialog.close();
      };

      this.save = function () {
          console.log(this.project);

          if (this.project.lxfs == 1) {
            this.project.starterWeixin = this.project.lxfsNum;
          } else if(this.project.lxfs == 2) {
            this.project.starterPhone =  this.project.lxfsNum;
          }

        if (!this.project || !this.project.name || !this.project.website || !this.project.bp
          || !this.project.starterName || !this.project.starterPosition
          || !this.project.financingNeedEnum
          || !this.project.lxfsNum) {
          krData.Alert.alert('请检查form表单，有必填项未填！');
          return false;
        }
        if(this.isRongzi && (!this.project.phase || !this.project.financeAmount
          || !this.project.financeAmountUnit)) {
            krData.Alert.alert('请检查form表单，有必填项未填！');
            return false;
        }

        if(this.isRongzi && !this.project.readed) {
          krData.Alert.alert("请先阅读《融资申请协议》");
          return false;
        }

        if (vm.institue.id) {
          this.project.id = vm.institue.id;
        }

        this.project.privilege = 'MUST_APPLY';
        if (!this.project.applySee) {
          this.project.privilege ='INVESTOR';
        }

        delete this.project.lxfsNum;
        delete this.project.lxfs;
        delete this.project.applySee;

        const projectInfo = angular.extend({}, this.project);
        this.service.saveCompany(this.project.id, projectInfo)
        .then(data => {
          krData.Alert.success('数据保存成功');
          vm.thirdpartyDialog.close();
        }).catch((err) => {
          krData.Alert.alert(`创建公司失败:${err.msg}`);
        });
      }

      this.setValue = function (){
        //console.log('========');
      }

      this.privilegeFun = function($event) {
        const checkbox = $event.target;
        if (checkbox.checked) {
          this.privilege = 'MUST_APPLY';
        } else {
          this.privilege = 'INVESTOR';
        }
      }

      this.uploadBp = function ($files) {
        const name = this.project.name || this.institue.name;
        let validObj = null;
        if ($files.length) {

          let fileSize=Math.round($files[0].size/1024*100)/100;
          validObj = krData.utls.validateBP($files[0]);
          if (!validObj.valid) {
            krData.Alert.alert(validObj.msg);
            return;
          }
          if(fileSize>7680){
            krData.Alert.alert('请上传小于7.5m的pdf文件！');
            return;
          }
          krData.utls.uploadBp(name, $files[0])
            .then(data => {
              this.project.bp = data.src;
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

      this.changeRongzi = function(){
        if (this.project.financingNeedEnum === 'FINANCING') {
            this.isRongzi = true;
        } else {
            this.isRongzi = false;
        }
      }
    }
    vm.thirdpartyDialog = this.ngDialog.open({
      template: '<div ng-include="\'/pages/thirdparty/templates/updateproject.html\'" center></div>',
      plain: true,
      appendTo: '.org-wrapper',
      controller: saveController,
      controllerAs: 'vm',
    });

    console.log(vm.thirdpartyDialog);
  }

}
