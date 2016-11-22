
function nameFormat() {
  return function (input) {
    if(!input)return '';
    if(input.length < 16){
        return input;
    }
    var format_input = input.substr(0, 16);
    return format_input + '...'
  }
}
angular
  .module('@@pages.workstationIndex', [])
  .filter('nameFormat', nameFormat);

export default nameFormat;
