import API from './base/API';
import * as utls from './base/utls';
import * as META from './constants/index';
import FormVM from './base/FormVM';
import Alert from './base/Alert';
import User from './base/User';
/* eslint-disable */
window.krData = {
  API,
  utls,
  FormVM,
  Alert,
  META,
  User,
};
window.krData.paddingContent = () => {
  // 因为动画原因，不能使用width检测宽度；
  const NARROW_WIDTH = 50;
  const WIDEN_WIDTH = 140;
  const width = $('#sidebar.narrow')[0] ? NARROW_WIDTH : WIDEN_WIDTH;
  $('.content-wrapper').css('padding-left', `${width}px`);
};
require('./bootstrap');
