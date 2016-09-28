import API from './base/API';
import * as utls from './base/utls';
import * as META from './constants/index';
import FormVM from './base/FormVM';
import Alert from './base/Alert';
/* eslint-disable */
window.krData = {
  API,
  utls,
  FormVM,
  Alert,
  META
};
require('./bootstrap');
