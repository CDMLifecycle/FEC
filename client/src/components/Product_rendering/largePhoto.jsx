import Magnifier from 'react-magnifier';

var largePhoto = (props) => {
  return (props.photo ?
  <Magnifier onClick={props.fullscreen} className='largeImage' id='lg' src={props.photo} width='auto' height='600'></Magnifier> : <div></div>)
}
export default largePhoto;