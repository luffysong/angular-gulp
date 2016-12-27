const _callPhantom = window.callPhantom || angular.noop;
const EVENTS = {
  RENDER_END: 'RENDER_END',
};
function callPhantom(json) {
  /* eslint-disable */
  setTimeout(()=> {
    _callPhantom.call(window, json);
  }, 500);
  /* eslint-enable */
}
export default class phantom {
  static render() {
    callPhantom({
      name: EVENTS.RENDER_END,
    });
  }
}

