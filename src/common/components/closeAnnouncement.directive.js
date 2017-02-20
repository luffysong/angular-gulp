/* @ngInject */
function closeAnnouncementDirective(ngDialog) {
  return {
    restrict: 'AE',
    link($scope, element, attr) {
      element.click(() => {
        window.closeAnnouncement = true;
        $('.announcement').hide();
      });
    }
  };
}
export default closeAnnouncementDirective;
