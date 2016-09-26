import * as utls from './utls';

function makeMessage(msg, classes) {
  if (angular.isString(msg)) {
    return {
      message: msg,
      classes,
    };
  }
  const msgCopy = angular.copy(msg);
  msgCopy.classes = classes;
  return msgCopy;
}
export default class Alert {

  static alert(message) {
    const notify = utls.getService('notify');
    notify(makeMessage(message, ['alert-danger']));
  }

  static success(message) {
    const notify = utls.getService('notify');
    notify(makeMessage(message, ['alert-success']));
  }
}
