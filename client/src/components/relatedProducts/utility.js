
var replaceEscapeQuotes = (string) => {
  if (string) {
    return string = string.replace(/\\"/g, '').replace(/['"]+/g, '')
  }
  return string;
}

export {replaceEscapeQuotes};