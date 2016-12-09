function enterFilter() {
  return function (input) {
    return input.replace(/\n/g, '<br>');
  };
}

angular
  .module('@@pages.project', [])
  .filter('enterFilter', enterFilter);

export default enterFilter;
