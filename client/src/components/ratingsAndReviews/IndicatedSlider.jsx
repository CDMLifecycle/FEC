import React from 'react';
import Triangle from './svg/indicator.svg';
import './indicatedSlider.css';

class IndicatedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        type: 23
    }
  }

  ratingToWidth(rating) {
    return rating ? (rating / 5).toFixed(2) * 100 + '%' : '0%';
  }

  render() {
    console.log('in redner',this.ratingToWidth(this.props.metadata.value));
    return (
      <div className='indicated-slider-container'>
        <h5>{this.props.characteristic}</h5>
        <div className='tri-bar-box'>
          <div className='bars-container'>
            <div className='even-blocks'></div>
            <div className='even-blocks'></div>
            <div className='even-blocks'></div>
          </div>
          <div className='icon-divs-container'>
            <div
              className='indicator'
              style={{ transform: `translateX(${this.ratingToWidth(this.props.metadata.value)})` }}
            >
              <img src={Triangle} className='icon' ></img>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default IndicatedSlider;