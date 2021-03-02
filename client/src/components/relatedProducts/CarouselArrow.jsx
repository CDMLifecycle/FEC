import React from 'react';

var CarouselArrow = (props) => {

  var forwardArrow = 'arrow_forward_ios';
  var backwardArrow = 'arrow_backward_ios';

  return (
    <div className='CarouselArrow'>
      <span className="material-icons">{props.direction === 'forward' ? forwardArrow : backwardArrow}</span>
    </div>
  )
}
export default CarouselArrow;