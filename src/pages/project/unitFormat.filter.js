
function unitFilter() {
  return function (unit) {
    if(unit === 1){
      return '￥';
    }else if(unit ===2){
      return '$'
    }
  }
}
angular
  .module('@@pages.project', [])
  .filter('unitFilter', unitFilter);

export default unitFilter;
