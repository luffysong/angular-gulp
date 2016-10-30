import SearchIndexController from './index.controller';
import krColumn3Directive from './krColumn.directive.js';

angular.module('@pages.search', [])
  .controller('SearchIndexController', SearchIndexController)
  .directive('krReloadProject', function krReload(projectService, resolveData, $compile, $timeout) {
    return {
      link: function postLink($scope, ele) {
        projectService.allData({
          id: 1515,
        })
        .then((data) => {
          resolveData.projectData = data;
          $timeout(() => {
            ele[0].innerHTML = `<div ng-controller="ProjectIndexController as vm"
            ng-include="'/pages/project/templates/index.html'"></div>`;
            $compile(ele.contents())($scope);
          }, 2000);
        });
      },
    };
  })
  .directive('krColumn3', krColumn3Directive);

