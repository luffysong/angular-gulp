import krData from 'krData';
import BaseInfoVM from './baseInfo.vm';
import MemberVM from './member.vm';
import InvestedCaseVM from './investedCase.vm';
//import createProjectVm from '../thirdparty/createProject.vm';

@Inject('$stateParams', '$timeout',
'orgService','ngDialog','thirdpartyIndexService','$state', '$q',
'$filter', 'user','resolveData', 'createProjectService')
export default class OrgController {
  years = [];
  year = new Date().getFullYear() - 1;
  linecColumnTooltip = {
    headerFormat: '',
    pointFormatter: function pointFormatter() {
      return `<div class="chart-tooltip">
       <p>${this.year}年 / ${this.category}</p>
       <p>投资金额：￥<span>${this.item.investAmount}万</span></p>
       <p>投资案例：<span>${this.item.investCase}个</span></p>
      </div>`;
    },
  };
  trendHg = {
    options: {
      legend: {
        floating: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        y: 0,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        line: {
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
              halo: {
                size: 0,
              },
            },
          },
          marker: {
            fillColor: '#fff',
            lineColor: '#88C4FF',
            lineWidth: 2,
            symbol: 'circle',
            states: {
              hover: {
                radius: 4,
                radiusPlus: 0,
                lineWidthPlus: 0,
              },
            },
          },
        },
        column: {
          states: {
            hover: {
              color: '#BBE4FF',
            },
          },
        },
        series: {
          tooltip: this.linecColumnTooltip,
        },
      },
      title: {
        useHTML: true,
        align: 'left',
        x: -10,
        text: '<h5 class="trend-title">投资规模及案例数趋势</h5>',
      },
      chart: {
        height: 270,
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        shadow: false,
        borderWidth: 0,
        padding: 0,
      },
    },
    xAxis: {
      tickWidth: 0,
      lineColor: '#E7E7E7',
      gridLineWidth: 1,
      gridLineColor: '#F2F4F5',
      gridLineDashStyle: 'longdash',
    },
    yAxis: [{
      lineColor: '#E7E7E7',
      gridLineColor: '#F2F4F5',
      gridLineDashStyle: 'longdash',
      lineWidth: 1,
      tickPixelInterval: 34,
      labels: {
        format: '{value}万',
      },
      title: {
        enabled: false,
      },
    }, {
      gridLineDashStyle: 'longdash',
      gridLineColor: '#F2F4F5',
      lineColor: '#E7E7E7',
      lineWidth: 1,
      tickPixelInterval: 34,
      title: {
        enabled: false,
      },
      labels: {
        format: '{value}个',
      },
      opposite: true,
    }],
  };

  industryHg = {
    options: {
      credits: {
        enabled: false,
      },
      legend: {
        floating: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        y: 0,
        symbolHeight: 8,
        symbolWidth: 8,
        itemMarginTop: 4,
        lineHeight: 18,
        itemStyle: {
          fontSize: '12px',
          color: '#5a626d',
        },
      },
      chart: {
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        width: 220,
        height: 140,
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        shadow: false,
        borderWidth: 0,
        padding: 0,
      },
      plotOptions: {
        size: '100%',
        pie: {
          states: {
            hover: {
              enabled: false,
            },
          },
          tooltip: {
            headerFormat: '',
            pointFormatter: function pointFormmater() {
              if (this.name === '其他') {
                const otherList = this.item.list.map(item =>
                  `<li>${item.name}：共${item.count}个，占${item.proportion}</li>`
                );
                const otherHtml = `<ul>${otherList.join('')}</ul>`;
                return `<div class="chart-tooltip"><p>其他</p>${otherHtml}</div>`;
              }
              return `<div class="chart-tooltip"><p>${this.name}</p>共${this.total}个，
              占${this.percentage.toString().slice(0, 4)}%</div>`;
            },
          },
          showInLegend: true,
          colors: ['#88C4FF', '#BBE4FF',
            '#CAD1FF', '#FFD46B',
            '#B3DD6A', '#9DE3D9',
          ],
          size: 120,
          center: [50, 50],
          dataLabels: {
            enabled: false,
          },
        },
      },
    },
    title: {
      y: 65,
      x: -40,
      align: 'center',
      style: {
        fontSize: '12px',
        color: '#5a626d',
        lineHeight: 18,
      },
    },
  };

  phaseHg = {
  };

  constructor() {
    const orgData = this.resolveData.orgData;
    this.orgData = orgData;
    this.init();
    this.id = orgData.basic.id;
    this.analyze = orgData.analyze;
    angular.extend(this, this.orgData);
    this.years = krData.utls.fromYear(this.orgData.analyze.initParam.earliestYear);
    /* 因2017无数据,暂时删除2017 */
    if (this.years.indexOf(2017) >= 0) {
      this.years.splice(this.years.indexOf(2017), 1);
    }
    this.changeCondition();
    this.renderChart();
  }

  // init() {
  //   this.init();
  // }
  // orgData = this.resolveData.orgData;
  // console.log(orgData);
  projectService = this.createProjectService;
  project;
  init() {
    if (this.orgData) {
      this.baseInfoVM = new BaseInfoVM(this.orgData);
      this.memberVM = new MemberVM(this.orgData);
      this.investedCaseVM = new InvestedCaseVM();
      //thirdpartyOpenWin = new createProjectVm();
      //console.log(new createProjectVm(this.ngDialog), this.thirdpartyOpenWin);
      //查询服务项目
      this.thirdpartyOpenWin = this.openSubProject;
      this.queryServePros();
      this.managePrivilege();
      this.getCompanyStas();
    }
    angular.copy(this.industryHg, this.phaseHg);
  }

  changeCondition() {
    this.loadAnalyze();
  }

  renderChart() {
    if (this.analyze.hasData) {
      this.setInvestIndustry(this.analyze.investedIndustry);
      this.setInvestPhase(this.analyze.investedPhase);
    }
    this.setTrend(this.analyze.investmentTrend);
  }

  loadAnalyze() {
    this.orgService.analyze({
      id: this.id,
      industry: this.industry,
      phase: this.phase,
      year: this.year,
    }).then(data => {
      this.analyze = data;
      //console.log(data);
      this.renderChart();
    });
  }

  setInvestPhase(investPhaseObj) {
    const investPhase = investPhaseObj.investedPhases;
    const MAX_COUNT = 5;
    const phase5 = investPhase.slice(0, MAX_COUNT);
    if (investPhaseObj.investedPhaseCount > MAX_COUNT) {
      const other = this.getOther(investPhase);
      other.other.list = other.otherList;
      phase5.push(other.other);
    }

    this.phaseHg.series = [{
      data: phase5.map(item => ({
        name: item.name,
        y: item.count,
        item,
      })),
      type: 'pie',
      name: `共投资${investPhaseObj.investedPhaseCount}个轮次`,
      innerSize: '70%',
    }];
    this.phaseHg.title.text = `共投资<br>${investPhaseObj.investedPhaseCount}个轮次`;
  }

  setInvestIndustry(investIndustryObj) {
    const investIndustry = investIndustryObj.investedIndustries;
    const MAX_COUNT = 5;
    const industry5 = investIndustry.slice(0, MAX_COUNT);
    if (investIndustryObj.investedIndustryCount > MAX_COUNT) {
      const other = this.getOther(investIndustry);
      other.other.list = other.otherList;
      industry5.push(other.other);
    }
    this.industryHg.series = [{
      data: industry5.map(item => ({
        name: item.name,
        y: item.count,
        item,
      })),
      type: 'pie',
      name: `共投资${investIndustryObj.investedIndustryCount}个行业`,
      innerSize: '70%',
    }];
    this.industryHg.title.text = `共投资<br>${investIndustryObj.investedIndustryCount}个行业`;
  }

  getOther(arr) {
    const MAX_LENGTH = 5;
    const other = arr.slice(MAX_LENGTH);
    return {
      other: other.reduce((pre, current) => (
        {
          count: pre.count + current.count,
          name: '其他',
        }
      ), { count: 0 }),
      otherList: other,
    };
  }
  setTrend(investmentTrend) {
    if (!investmentTrend) {
      investmentTrend = [];
      for (let i = 0, len = 12; i < len; i++) {
        investmentTrend.push({
          investAmount: 0,
          investCase: 0,
          x: `${i + 1}月`,
        });
      }
    }
    this.trendHg.xAxis.categories = investmentTrend.map(item => item.x);
    this.trendHg.series = [{
      name: '投资金额 / 万',
      color: '#F1FAFF',
      data: investmentTrend.map((item) => ({
        y: item.investAmount,
        item,
        year: this.year,
      })),
      yAxis: 0,
      zIndex: 0,
      type: 'column',
    },
    {
      color: '#88C4FF',
      name: '投资案例 / 个',
      data: investmentTrend.map((item) => ({
        y: item.investCase,
        item,
        year: this.year,
      })),
      zIndex: 1,
      lineWidth: 1,
      yAxis: 1,
    },
    ];
    this.trendHg.options.series = this.trendHg.series;
  }

  managePrivilege(){
    this.editPrivilege = false;
    if(this.orgData.basic.managerId != 0
      && (this.user.data.id == this.orgData.basic.managerId)){
          this.editPrivilege = true;
    }
  }

  queryServePros(id,page, size){
    if (this.orgData.basic.thirdEntityId) {
      let params = {
        id:id || this.orgData.basic.thirdEntityId,
        page:page || 1,
        pageSize: size || 5,
      }
      this.thirdpartyIndexService.queryCompanys(params).then((data) =>{
        this.servePros = data;
        if (data.page * data.pageSize < data.totalCount) {
            this.hasMoreServedPros = true;
        } else {
          this.hasMoreServedPros = false;
        }
      });
    }
  }

  loadMoreServedPros(){
    this.queryServePros(this.servePros.id,null,1000);
  }

  //服务项目状态统计
  getCompanyStas() {
    this.thirdpartyIndexService.getCompanyStas()
    .then(data => {
      this.companyStats = data;
    });
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

        if (vm.orgData.basic.thirdEntityId) {
          this.project.id = vm.orgData.basic.thirdEntityId
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
          vm.thirdpartyDialog.close();
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
        const name = this.project.name || vm.orgData.basic.name;
        let validObj = null;
        if ($files.length) {

          let fileSize=Math.round($files[0].size/1024*100)/100;
          validObj = krData.utls.validateBP($files[0]);
          if (!validObj.valid) {
            krData.Alert.alert(validObj.msg);
            return;
          }
          if(fileSize>7680){
            krData.Alert.alert('请上传小于7.5M的pdf文件！');
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
      template: '<div ng-include="\'/pages/thirdparty/template/updateproject.html\'" center></div>',
      plain: true,
      appendTo: '.org-wrapper',
      controller: saveController,
      controllerAs: 'vm',
    });
  }

}
