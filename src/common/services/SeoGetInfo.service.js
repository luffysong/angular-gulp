import API from '../base/API.js';
import { SEO_INFO_META } from '../constants/seo.cs.js';

export default class SeoGetInfoService {

  getMeta(tml, id) {
    console.log(SEO_INFO_META);
    const url = SEO_INFO_META.meta.url;
    const metaApi = new API(url + SEO_INFO_META.meta[tml].tmlId + '/' + id);
    return metaApi.get().then(data => {
      console.log(data);
      angular.forEach(SEO_INFO_META.meta.filter_tag, function (i, e) {
        $(e).remove();
      });

      // $('meta').each(function (i, e) {
      //   for ( j = 0; j < SEO_INFO_META.meta.filter_name.length; j++) {
      //     if ($(e).attr('name') === SEO_INFO_META.meta.filter_name[j]) {
      //       $(e).remove();
      //     }
      //   }
      // });

      // $(data.data.meta).appendTo('head');
      // console.log(data);
    });
  };

  // 获取seo内链
  getInfoLinks(templateId, cid) {
    return new API('/api/p/sm/seo/summary/' + templateId + '/' + cid).get();
  };
}
