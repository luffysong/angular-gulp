
function dateFilter() {
  return function (input) {
    if(!input)return '';
    var date = new Date(input);
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    function handleNumber(n) {
      return n > 9 ? n : '0'+n;
    }

    if(date.getFullYear() !== new Date().getFullYear() && date.getFullYear() !== yesterday.getFullYear()) {
      return String(date.getFullYear()).slice(2,String(date.getFullYear()).length)+'/'+handleNumber(date.getMonth()+1)+'/'+handleNumber(date.getDate());
    }else {
      if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
        return '今天';
      }else if(date.getFullYear() === yesterday.getFullYear() && date.getMonth() === yesterday.getMonth() && date.getDate() === yesterday.getDate()) {
        return '昨天';
      }else {
        return handleNumber(date.getMonth()+1)+'/'+handleNumber(date.getDate());
      }
    }

  }
}
angular
  .module('@@pages.list', [])
  .filter('dateFilter', dateFilter);

export default dateFilter;
