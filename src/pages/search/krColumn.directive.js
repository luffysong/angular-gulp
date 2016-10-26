/* eslint-disable no-use-before-define */
export default function krColumn3Directive() {
  return {
    controller: 'SearchIndexController',
    templateUrl: '/pages/search/templates/index.html',
    link: postLink,
  };

  function postLink() {
  }
}
