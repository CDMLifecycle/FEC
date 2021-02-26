var renderImages = (props) => {
  return props.photos.map((item, i) => {
    return <img className='thumbnails' src={item.url} key={i} width='167' height='250'></img>;
  });

}

export default renderImages