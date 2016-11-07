export default {
  link: function postLink($scope, ele, attrs) {
    const props = $scope.$eval(attrs.krScrollMe);
    if (props.isMe) {
      /* eslint-disable angular/timeout-service */
      setTimeout(() => {
      /* eslint-enable angular/timeout-service */
        angular.element(props.container).scrollTo(ele[0]);
      }, 100);
    }
  },
};
