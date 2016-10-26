export default function enterFormatFactory() {
  return function enterFormat(text){
    let formatText = text.replace(/\r\n/ig,"<br/>")
    return formatText;
  };
}

