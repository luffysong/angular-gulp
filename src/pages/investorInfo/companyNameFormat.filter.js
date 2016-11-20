
function companyNameFormat() {
  return function (input) {
    if(!input)return '';
    if(input.length < 16){
        return input;
    }
    var format_input = input.substr(0, 17);
    return format_input + '...'
  }
}
angular
  .module('@@pages.investorInfo', [])
  .filter('companyNameFormat', companyNameFormat);

export default companyNameFormat;
