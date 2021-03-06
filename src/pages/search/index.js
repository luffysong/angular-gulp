import SearchIndexController from './index.controller';
import krColumn3Directive from './krColumn.directive.js';
import krScrollMe from './krScrollMe.directive.js';
angular.module('@pages.search', [])
  .controller('SearchIndexController', SearchIndexController)
  .directive('krReloadProject', function krReload(projectService, resolveData, $compile) {
    return {
      link: function postLink($scope, ele) {
        $scope.$watch('searchVm.columnOptions.companyId', (nv) => {
          if (nv) {
            ele[0].innerHTML = '<div kr-loading="columnProject" loading="true" ></div>';
            $compile(ele.contents())($scope);
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
  .directive('krScrollMe', () => krScrollMe)
  .directive('krColumn3', krColumn3Directive);

