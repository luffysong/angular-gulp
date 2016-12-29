import escapeHtml from 'escape-html';
import API from './base/API';
import * as utls from './base/utls';
import * as META from './constants/index';
import FormVM from './base/FormVM';
import Alert from './base/Alert';
import User from './base/User';
import phantom from './base/phantom';
import { paddingContent } from './ui.js';
/* eslint-disable */
window.krData = {
  API,
  utls,
  FormVM,
  Alert,
  META,
  User,
  paddingContent,
  phantom,
  escapeHtml,
};
require('./bootstrap');
