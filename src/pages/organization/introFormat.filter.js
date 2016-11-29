
function introFilter() {
  return function (input) {
    if(!input)return '';
    if(input.length < 55){
      return input;
    }
    var format_input = input.substr(0, 55);
    return format_input + '...'
  }
}
angular
  .module('@@pages.organization', [])
  .filter('introFilter', introFilter);

export default introFilter;
