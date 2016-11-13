module.exports = {
  plugins: [
    "babel",
    "angular",
  ],
  parserOptions: {
	  "sourceType": "module",
	  "allowImportExportEverywhere": false

  },
  env: {
    "browser": true,
  },
  rules: {
    "no-debugger": 0,
    "new-cap": 0,
    "no-underscore-dangle": 0,
    "babel/new-cap": 2,
    "no-param-reassign": 0,
    "prefer-rest-params": 1,
    "no-restricted-syntax": 0,
    "prefer-arrow-callback": 0,
    "react/require-extension": 0,
    "import/prefer-default-export": 0,
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "arrow-body-style": ["error", "as-needed"],
    "import/no-unresolved": ["error", {
      ignore: ['krData'],
    }],
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    'angular/angularelement': 0,
    'angular/controller-as': 2,
    'angular/controller-as-route': 2,
    'angular/controller-as-vm': [2, 'vm'],
    'angular/controller-name': [2, '/[A-Z].*Controller$/'],
    'angular/deferred': 0,
    'angular/definedundefined': 2,
    'angular/di': [2, 'function'],
    'angular/di-order': [0, true],
    'angular/directive-name': 0,
    'angular/component-limit': [0, 1],
    'angular/document-service': 2,
    'angular/empty-controller': 0,
    'angular/file-name': 0,
    'angular/filter-name': 0,
    'angular/foreach': 0,
    'angular/function-type': 0,
    'angular/interval-service': 2,
    'angular/json-functions': 2,
    'angular/log': 0,
    'angular/module-getter': 0,
    'angular/module-name': 0,
    'angular/module-setter': 2,
    'angular/no-angular-mock': 0,
    'angular/no-controller': 0,
    'angular/no-cookiestore': 2,
    'angular/no-jquery-angularelement': 2,
    'angular/no-private-call': 2,
    'angular/no-service-method': 0,
    'angular/no-services': [2, ['$http', '$resource', 'Restangular']],
    'angular/on-watch': 2,
    'angular/rest-service': 0,
    'angular/service-name': 2,
    'angular/timeout-service': 2,
    'angular/typecheck-array': 2,
    'angular/typecheck-date': 2,
    'angular/typecheck-function': 2,
    'angular/typecheck-number': 2,
    'angular/typecheck-object': 2,
    'angular/typecheck-string': 2,
    'angular/watchers-execution': [0, '$digest'],
    'angular/window-service': 2,
  },
  globals: {
    Inject: true,
    angular: true,
    jquery: true,
    $: true,
  },
  parser: "babel-eslint",
  extends: 'airbnb'
};
