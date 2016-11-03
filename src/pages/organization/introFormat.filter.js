
function introFilter() {
  return function (input) {
    if(!input)return '';
    var format_input = input.substr(0, 55);
    return format_input + '...'
  }
}
angular
  .module('@@pages.organization', [])
  .filter('introFilter', introFilter);

export default introFilter;
