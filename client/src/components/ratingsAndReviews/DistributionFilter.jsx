import React from 'react';

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
      <div>
        <h3>Little distribution graph</h3>
          <button onClick={this.handleClick} value='1'>1 Star</button>
          <button onClick={this.handleClick} value='2'>2 Star</button>
          <button onClick={this.handleClick} value='3'>3 Star</button>
          <button onClick={this.handleClick} value='4'>4 Star</button>
          <button onClick={this.handleClick} value='5'>5 Star</button>
      </div>
      )
    : <React.Fragment></React.Fragment> ;
  }
}

export default DistributionFilter;