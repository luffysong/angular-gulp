/* eslint-disable no-use-before-define,angular/timeout-service,no-unused-vars */
import krData from 'krData';
export default function krColumn3Directive($window) {
  return {
    scope: {
      columnOptions: '=',
    },
    controllerAs: 'searchVm',
    bindToController: true,
    controller: 'SearchIndexController',
    templateUrl: '/pages/search/templates/index.html',
    link: postLink,
  };

  function postLink() {
    $window.narrow();
    krData.paddingContent();
  }
}
krColumn3Directive.$inject = ['$window'];
