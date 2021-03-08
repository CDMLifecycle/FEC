import React from 'react';
import Slider from './Slider.jsx'
import './distributionFilter.css';

class DistributionFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
    this.forMap = [5, 4, 3, 2, 1];
    this.handleClick = this.handleClick.bind(this);
    this.mapSliders = this.mapSliders.bind(this);
  }

  handleClick(e) {
    let hit = e.target.value
    this.setState({
      [hit]: !this.state[hit]
    }, () => this.props.updateFilter(this.state))
  }

  mapSliders(state) {
    return this.forMap.map(num =>
      <Slider
        productPercent={this.props.productMetadata.totals.ratingsPercent[num]
          ? Number(this.props.productMetadata.totals.ratingsPercent[num])
          : 0}
        num={num}
        handleClick={this.handleClick}
        defineClass={this.state[num]}
      />)
  }

  render() {
    return this.props
    ? (
      <div className='df-container'>
        <h3>RATING BREAKDOWN</h3>
        <div className='sliders-df-container'>
          {this.mapSliders(this.state)}
        </div>
      </div>
      )
    : <React.Fragment></React.Fragment> ;
  }
}

export default DistributionFilter;