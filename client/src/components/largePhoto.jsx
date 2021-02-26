
var largePhoto = (props) => {
  return (props.photo ? <img src={props.photo} width='450' height='650'></img> : <div></div>)
}
export default largePhoto;