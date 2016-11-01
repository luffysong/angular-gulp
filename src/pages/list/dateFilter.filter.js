
function dateFilter() {
  return function (input) {
    if(!input)return '';
    var date = new Date(input);
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if(date.getFullYear() !== new Date().getFullYear() && date.getFullYear() !== yesterday.getFullYear()) {
      return String(date.getFullYear()).slice(2,String(date.getFullYear()).length)+'/'+(date.getMonth()+1)+'/'+date.getDate();
    }else {
      if(date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
        return '今天';
      }else if(date.getFullYear() === yesterday.getFullYear() && date.getMonth() === yesterday.getMonth() && date.getDate() === yesterday.getDate()) {
        return '昨天';
      }else {
        return (date.getMonth()+1)+'/'+date.getDate();
      }
    }

  }
}
angular
  .module('@@pages.list', [])
  .filter('dateFilter', dateFilter);

export default dateFilter;
