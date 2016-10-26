
function dateFilter() {
  return function (input) {
    if(!input)return '';
    var date = new Date(input);
    if(date.getFullYear() !== new Date().getFullYear()) {
      return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日';
    }else if(date.getMonth() !== new Date().getMonth()) {
      return (date.getMonth()+1)+'月'+date.getDate()+'日';
    }else {
      if(date.getDate() === new Date().getDate()) {
        return '今天';
      }else if(date.getDate() === (new Date().getDate()-1)) {
        return '昨天';
      }else {
        return (date.getMonth()+1)+'月'+date.getDate()+'日';
      }
    }
  }
}
angular
  .module('@@pages.list', [])
  .filter('dateFilter', dateFilter);

export default dateFilter;
