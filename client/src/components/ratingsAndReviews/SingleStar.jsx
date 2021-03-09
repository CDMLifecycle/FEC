import React from 'react';
import StarThreeQuarters from './svg/starThreeQuarter.svg';
import StarHalf from './svg/starHalf.svg';
import StarNoFill from './svg/starNoFill.svg';
import StarQuarter from './svg/starQuarter.svg';
import StarFill from './svg/starFill.svg';
import StarYellow from './svg/starYellow.svg';


class SingleStar extends React.Component{
  constructor(props){
    super(props);
  }


  renderSwitch(num, size, yellow) {
    if (yellow) {
      return (<img src={StarYellow} className='star'
      style={{width: `${size}px`}}/>);
    }
    switch(num) {
      case 1:
        return (
          <img
            src={StarFill}
            className='star'
            style={{width: `${size}px`}}
          />);
      case -1:
        return (
          <img
            src={StarNoFill}
            className='star'
            style={{width: `${size}px`}}
          />);
      case .25:
        return (
          <img
            src={StarQuarter}
            className='star'
            style={{width: `${size}px`}}
          />);
      case .50:
        return (
          <img
            src={StarHalf}
            className='star'
            style={{width: `${size}px`}}
          />);
      case .75:
        return (
          <img
            src={StarThreeQuarters}
            className='star'
            style={{width: `${size}px`}}
          />);
    }
  }

 render() {
   return (this.props ? this.renderSwitch(this.props.num, this.props.size, this.props.yellow) : null);
  }
}

// const YellowStar = (props) => (<img src={StarYellow} className='star' />);



export default SingleStar;
