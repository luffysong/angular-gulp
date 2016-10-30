import SearchIndexController from './index.controller';
import krColumn3Directive from './krColumn.directive.js';

angular.module('@pages.search', [])
  .controller('SearchIndexController', SearchIndexController)
  .directive('krReloadProject', function krReload(projectService, resolveData, $compile, $timeout) {
    return {
      link: function postLink($scope, ele) {
        $scope.$watch('searchVm.columnOptions.companyId', (nv) => {
          if (nv) {
            projectService.allData({
              id: nv,
            })
            .then((data) => {
              resolveData.projectData = data;
              ele[0].innerHTML = `<div ng-controller="ProjectIndexController as vm"
              ng-include="'/pages/project/templates/index.html'"></div>`;
              $compile(ele.contents())($scope);
            });
          }
        });
      },
    };
  })
  .directive('krColumn3', krColumn3Directive);

