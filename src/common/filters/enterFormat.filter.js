export default function enterFormatFactory() {
  return function enterFormat(text){
    let formatText = text.replace(/\n/ig,"<br/>")
    return formatText;
  };
}

