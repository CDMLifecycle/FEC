import Magnifier from 'react-magnifier';
import { AnimateOnChange } from 'react-animation';
import { animations } from 'react-animation'

var largePhoto = (props) => {
  return (props.photo ?
    <AnimateOnChange
      animationIn="slidein 500ms ease-out forwards"
      animationOut="slideout 500ms ease-in forwards"
      durationOut={700}
      durationIn={0}
    >
      <Magnifier onClick={props.fullscreen} className='largeImage' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
    </AnimateOnChange>
: <div></div>)
}
export default largePhoto;