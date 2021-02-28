var stylesMap = (props) => {
  return props.photos.map( (item, i) => {
    const styles = {
      backgroundImage: `url(${item.photos[0].thumbnail_url})`,
    };
    return <div onClick={(event) => props.colorSet(item.name)} key={i} className='circleStyle'
    style={styles}></div>
  })
}

export default stylesMap;