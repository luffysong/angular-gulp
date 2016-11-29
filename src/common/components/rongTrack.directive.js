function rongTrackDirective() {
  return {
    restrict: 'AE',
    scope: {
      'track': '@rongTrack'
    },
    link(scope, element) {
      element.click(() => {
        if(window.krtracker) {
          window.krtracker('trackEvent', 'click', scope.track);
        }
      });
    }
  };
}
export default rongTrackDirective;
