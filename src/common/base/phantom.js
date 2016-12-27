import { getService } from './utls';
const _callPhantom = window.callPhantom || angular.noop;
const EVENTS = {
  RENDER_END: 'RENDER_END',
};
const RENDER_DELAY = 500;
function callPhantom(json) {
  /* eslint-disable */
  setTimeout(()=> {
    _callPhantom.call(window, json);
  }, RENDER_DELAY);
  /* eslint-enable */
}
export default class phantom {
  static render() {
    callPhantom({
      name: EVENTS.RENDER_END,
    });
  }

  static renderAsync(promises) {
    return getService('$q').all(promises).then(() => phantom.render());
  }

  static stopRender() {
    window.PH_PAGE_NOT_COMPELET = true;
  }

}

