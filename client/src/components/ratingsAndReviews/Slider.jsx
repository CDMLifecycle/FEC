import React from 'react';
import './slider.css';

const ifClicked = (bool) => {
  return bool ? 'selected' : 'unselected';
}

const Slider = (props) => (
  <div className='single-slider-container'>
      <button
        onClick={props.handleClick}
        value={props.num}
        className={ifClicked(props.defineClass)}
      >
        {props.num} Stars
      </button>
      <div className='range-container'>
        <div className='range-bar'>
          <div
            className='fill'
            style={{width: Number(props.productPercent) * 100 + '%'}}
          ></div>
        </div>
      </div>
  </div>
)




export default Slider;