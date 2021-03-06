import React from 'react';
import './characteristics.css';

const CharacteristicsBreakdown = (props) =>

  (<div className='characteristics-container'>
      <h5>Breakdown by characteristics</h5>
      <div>
        <span>Fit:     </span>
        <input
          type='range'
          disabled
          min='1'
          max='5'
          value={props.productMetadata.characteristics.Fit.value}
          list='ticks'
        />
          <datalist id='ticks' label='Too Small'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3' label='Perfect'>3</option>
            <option value='4'>4</option>
            <option value='5' label='Too Large'>5</option>
          </datalist>
      </div>
      <div>
        <span>Comfort:     </span>
        <input
          type='range'
          disabled
          min='1'
          max='5'
          value={props.productMetadata.characteristics.Comfort.value}
          list='ticks'
        />
          <datalist id='ticks' label='Too Small'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3' label='Perfect'>3</option>
            <option value='4'>4</option>
            <option value='5' label='Too Large'>5</option>
          </datalist>
      </div>
      <div>
        <span>Length:     </span>
        <input
          type='range'
          disabled
          min='1'
          max='5'
          value={props.productMetadata.characteristics.Length.value}
          list='ticks'
        />
          <datalist id='ticks' label='Too Small'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3' label='Perfect'>3</option>
            <option value='4'>4</option>
            <option value='5' label='Too Large'>5</option>
          </datalist>
      </div>
      <div>
        <span>Quality:     </span>
        <input
          type='range'
          disabled
          min='1'
          max='5'
          value={props.productMetadata.characteristics.Quality.value}
          list='ticks'
        />
          <datalist id='ticks' label='Too Small'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3' label='Perfect'>3</option>
            <option value='4'>4</option>
            <option value='5' label='Too Large'>5</option>
          </datalist>
      </div>
    </div>)



export default CharacteristicsBreakdown;