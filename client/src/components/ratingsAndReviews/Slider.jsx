import React from 'react'

const Slider = (props) => (
 <div>
    <span>{props.num}</span>
    <input
      type='range'
      disabled
      min='0'
      max='1'
      value={Number(props.productPercent)}
      step='any'
    />
  </div>
)


export default Slider;