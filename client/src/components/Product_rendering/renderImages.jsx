var renderImages = (props) => {
  return props.photos ? props.photos.map((item, i) => {
    return {item} ? <img id={`${i}`} onClick={(event) => props.changeLarge(event, item.photos[0].url, i)}className='thumbnails' src={item.photos[0].url} key={i} width='167' height='auto' /> : <div></div>
  }) : <div></div>

}

export default renderImages