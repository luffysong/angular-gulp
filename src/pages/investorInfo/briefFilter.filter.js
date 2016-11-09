
function briefFilter() {
  return function (input) {
    if(!input)return '';
    if(input.length < 37){
        return input;
    }
    var format_input = input.substr(0, 37);
    return format_input + '...'
  }
}
angular
  .module('@@pages.investorInfo', [])
  .filter('briefFilter', briefFilter);

export default briefFilter;
