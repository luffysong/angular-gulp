
function investDateFilter() {
  return function (input) {
    if(!input)return '';
    var date = new Date(input);
    var month = '';
    if(date.getMonth() + 1 < 10){
      month = '0' + (date.getMonth() + 1);
    }else {
      month = date.getMonth() + 1;
    }
    return String(date.getFullYear() + '.' + month);
  }
}
angular
  .module('@@pages.investorInfo', [])
  .filter('investDateFilter', investDateFilter);

export default investDateFilter;
