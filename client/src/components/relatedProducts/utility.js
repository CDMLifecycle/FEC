
var replaceEscapeQuotes = (string) => {
  if (string) {
    return string = string.replace(/\\"/g, '').replace(/['"]+/g, '')
  }
  return string;
}

var makePhotoMatrix = (photos) => {
  let imgs = [];
  for (let photo of photos) {
    imgs.push(photo);
  }
  let rowsOfImages = []
  for (let i = 0; i < imgs.length; i+= 4) {
    rowsOfImages.push(imgs.slice(i, i + 4));
  }
  if (rowsOfImages.length > 0) {
    return rowsOfImages
  } else {
    return null;
  }
}

export {replaceEscapeQuotes, makePhotoMatrix};