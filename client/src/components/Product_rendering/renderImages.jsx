var renderImages = (props) => {
  return props.photos ? props.photos.map((item, i) => {
    return {item} ? <img onClick={(event) => props.changeLarge(event, item.photos[0].url)}className='thumbnails' src={item.photos[0].url} key={i} width='167' height='auto' /> : <div></div>
  }) : <div></div>

}

export default renderImages