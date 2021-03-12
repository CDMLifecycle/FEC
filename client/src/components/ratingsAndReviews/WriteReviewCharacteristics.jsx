import React from 'react';
import './WriteReviewCharacteristics.css';

class WriteReviewCharacteristics extends React.Component {
  constructor(props) {
    super(props);
  }

  assignSpecifics(characteristic, type) {
    let ifClassName = type;
    switch (characteristic) {
      case 'Fit':
        return ifClassName
          ? ['center-one', 'center-two', 'center-three', 'center-two', 'center-one']
          : ['Runs Tight', 'Slightly Tight', 'Perfect', 'Slightly Long', 'Runs Long']
      case 'Length':
        return ifClassName
          ? ['center-one', 'center-two', 'center-three', 'center-two', 'center-one']
          : ['Runs Short', 'Slightly Short', 'Perfect', 'Slightly Long', 'Runs Long']
      case 'Comfort':
        return ifClassName
          ? ['to-right-one', 'to-right-two', 'to-right-three', 'to-right-four', 'to-right-five']
          : ['Uncomfortable', 'A Bit Uncomfortable', 'OK', 'Comfortable', 'Perfect']
      case 'Size':
        return ifClassName
          ? ['center-one', 'center-two', 'center-three', 'center-two', 'center-one']
          : ['Too Small', 'Slightly Small', 'Perfect', 'Slightly Big', 'Too Big']
      case 'Quality':
        return ifClassName
          ? ['to-right-one', 'to-right-two', 'to-right-three', 'to-right-four', 'to-right-five']
          : ['Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect']
      case 'Width':
        return ifClassName
          ? ['center-one', 'center-two', 'center-three', 'center-two', 'center-one']
          : ['Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly Wide', 'Too Wide']
    }
  }

  render() {
    let name = this.props.characteristic.toLowerCase();
    return (
      <div className='per-characteristic-box'>
        {this.props.characteristic.toUpperCase()}
        <label  className='wr-char-radio-box'>
          <div onChange={this.props.handleChange} className={this.props.state[name] === '1' ? 'char-selected' : this.assignSpecifics(this.props.characteristic, 'className')[0]}>
            <label className='wr-char-input-box' htmlFor={this.props.characteristic + '1'}>
              {this.assignSpecifics(this.props.characteristic)[0]}
            </label>
              <input
                type='radio'
                value='1'
                name={name}
                id={this.props.characteristic + '1'}
                required
              />
          </div>
          <div onChange={this.props.handleChange} className={this.props.state[name] === '2' ? 'char-selected' : this.assignSpecifics(this.props.characteristic, 'className')[1]}>
            <label className='wr-char-input-box' htmlFor={this.props.characteristic + '2'}>
              {this.assignSpecifics(this.props.characteristic)[1]}
              <input
                type='radio'
                value='2'
                name={name}
                id={this.props.characteristic + '2'}
              />
            </label>
          </div>
          <div onChange={this.props.handleChange} className={this.props.state[name] === '3' ? 'char-selected' : this.assignSpecifics(this.props.characteristic, 'className')[2]}>
            <label className='wr-char-input-box' htmlFor={this.props.characteristic + '3'}>
              {this.assignSpecifics(this.props.characteristic)[2]}
              <input
                type='radio'
                value='3'
                name={name}
                id={this.props.characteristic + '3'}
              />
            </label>
          </div>
          <div onChange={this.props.handleChange} className={this.props.state[name] === '4' ? 'char-selected' : this.assignSpecifics(this.props.characteristic, 'className')[3]}>
            <label className='wr-char-input-box' htmlFor={this.props.characteristic + '4'}>
              {this.assignSpecifics(this.props.characteristic)[3]}
              <input
                type='radio'
                value='4'
                name={name}
                id={this.props.characteristic + '4'}
              />
            </label>
          </div>
          <div onChange={this.props.handleChange} className={this.props.state[name] === '5' ? 'char-selected' : this.assignSpecifics(this.props.characteristic, 'className')[4]}>
            <label className='wr-char-input-box' htmlFor={this.props.characteristic + '5'}>
              {this.assignSpecifics(this.props.characteristic)[4]}
              <input
                type='radio'
                value='5'
                name={name}
                id={this.props.characteristic + '5'}
              />
            </label>
          </div>
        </label>
      </div>
    )
  }
}


export default WriteReviewCharacteristics;