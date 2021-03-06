import React from 'react';
import './slider.css';

const Slider = (props) => (
  <div className='single-slider'>
    <div>
        <input
          type='range'
          disabled
          min='0'
          max='1'
          value={Number(props.productPercent)}
          step='any'
        />
    </div>
  </div>
)


export default Slider;