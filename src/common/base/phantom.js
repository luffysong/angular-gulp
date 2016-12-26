const _callPhantom = window.callPhantom || angular.noop;
const EVENTS = {
  RENDER_END: 'RENDER_END',
};
function callPhantom(json) {
  _callPhantom.call(window, json);
}
export default class phantom {
  static render() {
    callPhantom({
      name: EVENTS.RENDER_END,
    });
  }
}

