import API from '../base/API.js';
import { SEO_INFO_META } from '../constants/seo.cs.js';
const meta = SEO_INFO_META.meta;

export default class SeoService {


  constructor() {
    this.setSeo = this.setSeo.bind(this);
  }
  seoApi = new API(`${meta.url}/:action/:id`, {
    index: meta.index.tmlId,
    project: meta.project.tmlId,
    projectList: meta.projectList.tmlId,
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
    return this.seoApi[action](params).then(this.setSeo);
  }

  loadIndex() {
    return this.loadSeo('index');
  }

  loadProject(id) {
    return this.loadSeo('project', { id });
  }

}
