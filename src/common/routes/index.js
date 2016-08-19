import home from './home.route';


function configRoute($stateProvider) {
  $stateProvider.state('home', home);
}

angular.module('@@app.routes', ['oc.lazyLoad', 'ui.router'])
  .config(configRoute);
