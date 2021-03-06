import React from 'react';
import Slider from './Slider.jsx'

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    let hit = e.target.value
    this.setState({
      [hit]: !this.state[hit]
    }, () => this.props.updateFilter(this.state))
  }

  render() {
    return this.props
    ? (
      <div className='slider-container'>
        <h3>Little distribution graph</h3>
          <button onClick={this.handleClick} value='1'>1 Star</button>
            <Slider
              productPercent={this.props.productMetadata.totals.ratingsPercent['1']
                ? Number(this.props.productMetadata.totals.ratingsPercent['1'])
                : 0}
              num={1}
            />
          <button onClick={this.handleClick} value='2'>2 Star</button>
            <Slider
              productPercent={this.props.productMetadata.totals.ratingsPercent['2']
                ? Number(this.props.productMetadata.totals.ratingsPercent['2'])
                : 0}
              num={2}
            />
          <button onClick={this.handleClick} value='3'>3 Star</button>
            <Slider
              productPercent={this.props.productMetadata.totals.ratingsPercent['3']
                ? Number(this.props.productMetadata.totals.ratingsPercent['3'])
                : 0}
              num={3}
                />
          <button onClick={this.handleClick} value='4'>4 Star</button>
            <Slider
              productPercent={this.props.productMetadata.totals.ratingsPercent['4']
                ? Number(this.props.productMetadata.totals.ratingsPercent['4'])
                : 0}
              num={4}
            />
          <button onClick={this.handleClick} value='5'>5 Star</button>
            <Slider
              productPercent={this.props.productMetadata.totals.ratingsPercent['5']
                ? Number(this.props.productMetadata.totals.ratingsPercent['5'])
                : 0}
              num={5}
            />
      </div>
      )
    : <React.Fragment></React.Fragment> ;
  }
}

export default DistributionFilter;