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
    ],
    label: [
      '/pages/label/index.js',
    ],
    follow: [
      '/pages/follow/index.js',
    ],
    landing: [
      'pages/landing/index.js',
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
  },
};
