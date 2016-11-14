const PROJECT_ORG = [
  '/bower/ngSticky/dist/sticky.min.js',
  '/bower/ng-dialog/js/ngDialog.min.js',
  '/bower/ng-dialog/css/ngDialog.min.css',
  '/bower/ng-dialog/css/ngDialog-theme-default.min.css',
  '/bower/angular-scroll/angular-scroll.min.js',
  '/bower/angular-clamp/ng-clamp.js',
  '/bower/ng-file-upload/ng-file-upload-all.min.js',
  '/bower/jQuery.dotdotdot/src/jquery.dotdotdot.js',
  '/bower/highcharts/highcharts.js',
  '/bower/highcharts-ng/dist/highcharts-ng.min.js',
  '/bower/angular-tooltips/dist/angular-tooltips.js',
  '/bower/angular-tooltips/dist/angular-tooltips.css',
  '/bower/qrcode-generator/js/qrcode.js',
  '/bower/angular-qrcode/angular-qrcode.js',
];
export default {
  page: {
    home: [
      '/pages/home/index.js',
    ],
    list: [
      '/pages/list/index.js',
      '/bower/ng-dialog/js/ngDialog.min.js',
      '/bower/ng-dialog/css/ngDialog.min.css',
      '/bower/ng-dialog/css/ngDialog-theme-default.min.css'
    ],
    label: [
      '/pages/label/index.js',
      '/bower/ng-dialog/js/ngDialog.min.js',
      '/bower/ng-dialog/css/ngDialog.min.css',
      '/bower/ng-dialog/css/ngDialog-theme-default.min.css'
    ],
    follow: [
      '/pages/follow/index.js',
      '/bower/ng-dialog/js/ngDialog.min.js',
      '/bower/ng-dialog/css/ngDialog.min.css',
      '/bower/ng-dialog/css/ngDialog-theme-default.min.css'
    ],
    landing: [
      '/pages/landing/index.js',
      '/bower/ng-dialog/js/ngDialog.min.js',
      '/bower/ng-dialog/css/ngDialog.min.css',
      '/bower/ng-dialog/css/ngDialog-theme-default.min.css'
    ],
    investorValidate: [
      '/pages/investorValidate/index.js',
      '/bower/ng-file-upload/ng-file-upload-all.min.js',
      '/bower/angular-tooltips/dist/angular-tooltips.js',
      '/bower/angular-tooltips/dist/angular-tooltips.css',
      '/bower/checklist-model/checklist-model.js',
      '/local_lib/slick-carousel/slick/slick.min.js',
      '/local_lib/slick-carousel/slick/slick.css',
      '/local_lib/angular-slick/dist/slick.js'
    ],
    fail: [
      '/pages/fail/index.js'
    ],
    project: [
      '/pages/project/index.js',
      ...PROJECT_ORG,
    ],
    createProject: [
      '/pages/createProject/index.js',
      '/bower/ng-file-upload/ng-file-upload-all.min.js',
      '/bower/angular-tooltips/dist/angular-tooltips.js',
      '/bower/angular-tooltips/dist/angular-tooltips.css',
    ],
    search: [
      '/pages/search/index.js',
    ],
    org: [
      '/pages/org/index.js',
      ...PROJECT_ORG,
    ],
    organization: [
      '/pages/organization/index.js',
    ],
    investment: [
      '/pages/investment/index.js',
    ],
    uc: [
      '/pages/uc/index.js',
      '/pages/uc/index.css',
    ],
    investorInfo: [
      '/pages/investorInfo/index.js',
      ...PROJECT_ORG,
    ],investorList: [
      '/pages/investorList/index.js',
    ],
  },
};
