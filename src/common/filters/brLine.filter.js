export default function brLineFilterFactory() {
  return function brLine(input) {
    if (!input) {
      return '';
    }
    return input.replace(/\n/g, '<br />');
  };
}
