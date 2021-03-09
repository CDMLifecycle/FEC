import React from 'react';
import './radioBtn.css';

const totalRadio = [1]

const RadioBtn = (props) => (
  <div className='radio-btn-container'>
    <label onChange={this.handleChange} value={this.state.rating}>
      <input type='radio' value='1' name='rating' required/>1
      <input type='radio' value='2' name='rating'/>2
      <input type='radio' value='3' name='rating'/>3
      <input type='radio' value='4' name='rating'/>4
      <input type='radio' value='5' name='rating'/>5
    </label>
  </div>
)

export default RadioBtn;