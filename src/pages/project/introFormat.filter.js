
function introFilter() {
  return function (input) {
    if(input.length < 7){
        return input;
    }
    if(!input)return '';
    var format_input = input.substr(0, 5);
    return format_input + '...'
  }
}
angular
  .module('@@pages.project', [])
  .filter('introFilter', introFilter);

export default introFilter;
