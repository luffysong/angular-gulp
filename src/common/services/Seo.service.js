import API from '../base/API.js';
import { SEO_INFO_META } from '../constants/seo.cs.js';
const meta = SEO_INFO_META.meta;

export default class SeoService {


  constructor() {
    this.setSeo = this.setSeo.bind(this);
    this._initMethod();
  }
  seoApi = new API(`${meta.url}/:action/:id`, {
    index: meta.index.tmlId,
    project: meta.project.tmlId,
    projectList: meta.projectList.tmlId,
    org: meta.org.tmlId,
    orgList: meta.orgList.tmlId,
    investor: meta.investor.tmlId,
    investorList: meta.investor.tmlId,
  });

  setSeo(seoData) {
    $(meta.filter_tag.join(',')).remove();
    $('meta').each((i, e) => {
      for (let j = 0; j < meta.filter_name.length; j++) {
        if ($(e).attr('name') === meta.filter_name[j]) {
          $(e).remove();
        }
      }
    });
    const head = document.head;
    head.innerHTML += seoData.meta;
    return seoData;
  }

  loadSeo(action, params) {
    if (!angular.isObject(params)) {
      params = { id: params };
    }
    return this.seoApi[action](params).then(this.setSeo);
  }

  _initMethod() {
    ['index', 'project', 'org', 'investor',
      'projectList', 'orgList', 'investorList',
    ].forEach(methodName => {
      this[`${methodName}Seo`] = (args) => this.loadSeo(methodName, args);
    });
  }

}
