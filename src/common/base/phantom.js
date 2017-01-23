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

  static inPhantom = !!window.callPhantom;
  static render() {
    if (window.PH_PAGE_NOT_COMPELET) {
      callPhantom({
        name: EVENTS.RENDER_END,
      });
    } else {
      throw new Error('phantom自动渲染已开启');
    }
  }

  static renderAsync(promises) {
    return getService('$q').all(promises).then(() => phantom.render());
  }

  static stopAutoRender() {
    window.PH_PAGE_NOT_COMPELET = true;
  }

  static startAutoRender() {
    window.PH_PAGE_NOT_COMPELET = false;
  }

}

