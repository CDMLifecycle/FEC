import React from 'react';
import Triangle from './svg/indicator.svg';
import './indicatedSlider.css';

const assignSpecifics = (characteristic, type) => {
  switch (characteristic) {
    case 'Fit':
      return type === 'arr' ? ['too tight', 'perfect', 'too long'] : 'bars-container-center';
    case 'Length':
      return type === 'arr' ? ['too short', 'perfect', 'too long'] : 'bars-container-center';
    case 'Comfort':
      return type === 'arr' ? ['uncomfortable', 'ok', 'perfect'] : 'bars-container-right';
    case 'Size':
      return type === 'arr' ? ['too small', 'perfect', 'too wide'] : 'bars-container-center';
    case 'Quality':
      return type === 'arr' ? ['poor', 'as expected', 'perfect'] : 'bars-container-right';
    case 'Width':
      return type === 'arr' ? ['too narrow', 'perfect', 'too wide'] : 'bars-container-center';
  }
}

const ratingToWidth = (rating) => {
  return rating ? (rating / 5).toFixed(2) * 100 + '%' : '0%';
}

const IndicatedSlider = (props) => (
  <div className='indicated-slider-container'>
    <h5>{props.characteristic}</h5>
    <div className='tri-bar-box'>
      <div className={assignSpecifics(props.characteristic)}>
        <div className='even-blocks'></div>
        <div className='even-blocks'></div>
        <div className='even-blocks'></div>
        <div className='label-characteristic'></div>
      </div>
      <div className='icon-divs-container'>
        <div
          className='indicator'
          style={{ transform: `translateX(${ratingToWidth(props.metadata.value)})` }}
        >
          <img src={Triangle} className='icon' alt='indicator'></img>
        </div>
      </div>
    </div>
    <div className='specifics-box'>
      <div className='specifics-left'>
        {assignSpecifics(props.characteristic, 'arr')[0]}
      </div>
      <div className='specifics-center'>
        {assignSpecifics(props.characteristic, 'arr')[1]}
      </div>
      <div className='specifics-right'>
        {assignSpecifics(props.characteristic, 'arr')[2]}
      </div>
    </div>
  </div>
)

export default IndicatedSlider;