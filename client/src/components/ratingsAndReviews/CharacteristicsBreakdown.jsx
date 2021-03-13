import React from 'react';
import './characteristics.css';
import IndicatedSlider from './IndicatedSlider.jsx'

const convertToArray = (meta) => {
  return meta
    ? Object.keys(meta.characteristics)
    : null;
}

const CharacteristicsBreakdown = (props) => {
  let characteristicsArray = convertToArray(props.productMetadata);
  return characteristicsArray
    ? <div className='characteristics-container'>
        <h3>CHARACTERISTICS</h3>
          {characteristicsArray.map((character, index) => (
            <IndicatedSlider
              characteristic={character}
              metadata={props.productMetadata.characteristics[character]}
              key={index}
            />
          ))}
      </div>
    : null;
}

export default CharacteristicsBreakdown;