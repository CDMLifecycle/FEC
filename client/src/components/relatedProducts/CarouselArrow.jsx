import React from 'react';

var CarouselArrow = (props) => {

  var forwardArrow = 'arrow_forward_ios';
  var backwardArrow = 'arrow_back_ios';
  var icon = "material-icons"
  props.direction === 'back' ? icon += ' icon-back' : null;
  return (
    <div className={'CarouselArrow-' + props.direction} onClick={() => props.scroll(props.direction)} >
      <span className={icon}>{props.direction === 'forward' ? forwardArrow : backwardArrow}</span>
    </div>
  )
}
export default CarouselArrow;