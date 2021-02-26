var renderImages = (props) => {
  console.log(props.photos);
  return props.photos.map( (item, i) => {
    return <img src={item.thumbnail_url} key={i}></img>
  });

};

export default renderImages