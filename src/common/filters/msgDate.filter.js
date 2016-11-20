function msgDateFilter() {
  return function (input) {
    if(!input)return '';
    var date = new Date(input);
    function handleNumber(n) {
      return n > 9 ? n : '0'+n;
    }
    return (date.getMonth()+1)+'月'+date.getDate()+'日'+' '+handleNumber(date.getHours())+':'+handleNumber(date.getSeconds());
  }
}
export default msgDateFilter;
