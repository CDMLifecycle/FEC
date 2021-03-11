import React from 'react';
import Triangle from './svg/indicator.svg';
import './indicatedSlider.css';

class IndicatedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.assignSpecifics = this.assignSpecifics.bind(this);
  }

  assignSpecifics(characteristic, type) {
    switch (characteristic) {
      case 'Fit':
        return type === 'arr' ? ['tight', 'perfect', 'long'] : 'bars-container-center';
      case 'Length':
        return type === 'arr' ? ['short', 'perfect', 'long'] : 'bars-container-center';
      case 'Comfort':
        return type === 'arr' ? ['uncomfortable', 'ok', 'perfect'] : 'bars-container-right';
      case 'Size':
        return type === 'arr' ? ['small', 'perfect', 'wide'] : 'bars-container-center';
      case 'Quality':
        return type === 'arr' ? ['poor', 'as expected', 'perfect'] : 'bars-container-right';
      case 'Width':
        return type === 'arr' ? ['narrow', 'perfect', 'wide'] : 'bars-container-center';
    }
  }

  ratingToWidth(rating) {
    return rating ? (rating / 5).toFixed(2) * 100 + '%' : '0%';
  }

  render() {
    return (
      <div className='indicated-slider-container'>
        <h5>{this.props.characteristic}</h5>
        <div className='tri-bar-box'>
          <div className={this.assignSpecifics(this.props.characteristic)}>
            <div className='even-blocks'></div>
            <div className='even-blocks'></div>
            <div className='even-blocks'></div>
            <div className='label-characteristic'></div>
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
        <div className='specifics-box'>
          <div className='specifics-left'>{this.assignSpecifics(this.props.characteristic, 'arr')[0]}</div>
          <div className='specifics-center'>{this.assignSpecifics(this.props.characteristic, 'arr')[1]}</div>
          <div className='specifics-right'>{this.assignSpecifics(this.props.characteristic, 'arr')[2]}</div>
        </div>
      </div>

    )
  }
}

export default IndicatedSlider;