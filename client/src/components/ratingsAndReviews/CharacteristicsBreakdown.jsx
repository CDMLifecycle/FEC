import React from 'react';
import './characteristics.css';
import IndicatedSlider from './IndicatedSlider.jsx'

class CharacteristicsBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  convertToArray(meta) {
    return meta
      ? Object.keys(meta.characteristics)
      : null;
  }

  render() {

    let characteristicsArray = this.convertToArray(this.props.productMetadata);

    return characteristicsArray
      ? (
      <div className='characteristics-container'>
        <h3>CHARACTERISTICS</h3>
          {characteristicsArray.map((character, index) => (
            <IndicatedSlider
              characteristic={character}
              metadata={this.props.productMetadata.characteristics[character]}
              key={index}
            />
          ))}
      </div>)
    : null;
  }
}


export default CharacteristicsBreakdown;