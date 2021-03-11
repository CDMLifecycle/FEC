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
          : ['Uncomfortable', 'Slightly Uncomfortable', 'OK', 'Comfortable', 'Perfect']
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
    console.log(this.props)
    let name = this.props.characteristic.toLowerCase();
    return (
      <div className='per-characteristic-box'>
        {this.props.characteristic}
        <label onChange={this.props.handleChange} className='wr-char-radio-box'>
          <label className='wr-char-input-box' for={this.props.characteristic + '1'}>
            {this.assignSpecifics(this.props.characteristic)[0]}
            <input
              type='radio'
              value='1'
              name={name}
              className={this.assignSpecifics(this.props.characteristic, 'className')[0]}
              id={this.props.characteristic + '1'}
              required
            />
          </label>
          <label className='wr-char-input-box' for={this.props.characteristic + '2'}>
            {this.assignSpecifics(this.props.characteristic)[1]}
            <input
              type='radio'
              value='2'
              name={name}
              className={this.assignSpecifics(this.props.characteristic, 'className')[1]}
              id={this.props.characteristic + '2'}
            />
          </label>
          <label className='wr-char-input-box' for={this.props.characteristic + '3'}>
            {this.assignSpecifics(this.props.characteristic)[2]}
            <input
              type='radio'
              value='3'
              name={name}
              className={this.assignSpecifics(this.props.characteristic, 'className')[2]}
              id={this.props.characteristic + '3'}
            />
          </label>
          <label className='wr-char-input-box' for={this.props.characteristic + '4'}>
            {this.assignSpecifics(this.props.characteristic)[3]}
            <input
              type='radio'
              value='4'
              name={name}
              className={this.assignSpecifics(this.props.characteristic, 'className')[3]}
              id={this.props.characteristic + '4'}
            />
          </label>
          <label className='wr-char-input-box' for={this.props.characteristic + '5'}>
            {this.assignSpecifics(this.props.characteristic)[4]}
            <input
              type='radio'
              value='5'
              name={name}
              className={this.assignSpecifics(this.props.characteristic, 'className')[4]}
              id={this.props.characteristic + '5'}
            />
          </label>
        </label>
      </div>
    )
  }
}


export default WriteReviewCharacteristics;