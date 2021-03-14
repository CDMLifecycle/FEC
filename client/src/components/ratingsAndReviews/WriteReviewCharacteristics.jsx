import React from 'react';
import './WriteReviewCharacteristics.css';

const assignSpecifics = (characteristic, type) => {
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

const radioButtonsMaker = (props, index, name) => (
  <div
    key={index+50}
    onChange={props.handleChange}
    className={props.state[name] === `${index + 1}`
      ? 'char-selected'
      : assignSpecifics(props.characteristic, 'className')[index]}
  >
    <label className='wr-char-input-box' htmlFor={props.characteristic + `${index + 1}`}>
      {assignSpecifics(props.characteristic)[index]}
    </label>
    <input
      type='radio'
      value={`${index + 1}`}
      name={name}
      id={props.characteristic + `${index + 1}`}
      required
    />
  </div>
)

const WriteReviewCharacteristics = (props) => {
  let name = props.characteristic.toLowerCase();
  return (
    <div className='per-characteristic-box'>
      {props.characteristic.toUpperCase()}
      <label  className='wr-char-radio-box'>
        {Array(5).fill(1).map((item, index) => radioButtonsMaker(props, index, name))}
      </label>
    </div>
  )
}

export default WriteReviewCharacteristics;