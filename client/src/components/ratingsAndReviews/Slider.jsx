import React from 'react';
import './slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  ifClicked(bool) {
    return bool ? 'selected' : 'unselected';
  }

  render (){
    return (
      <div className='single-slider-container'>
          <button
            onClick={this.props.handleClick}
            value={this.props.num}
            className={this.ifClicked(this.props.defineClass)}
          >{this.props.num} Stars</button>
          <div className='range-container'>
            <div className='range-bar'>
              <div
                className='fill'
                style={{width: Number(this.props.productPercent) * 100 + '%'}}
              ></div>
            </div>
          </div>
      </div>
    )
  }
}

export default Slider;