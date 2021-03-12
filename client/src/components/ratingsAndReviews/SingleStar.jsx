import React from 'react';
import StarThreeQuarters from './svg/starThreeQuarter.svg';
import StarHalf from './svg/starHalf.svg';
import StarNoFill from './svg/starNoFill.svg';
import StarQuarter from './svg/starQuarter.svg';
import StarFill from './svg/starFill.svg';

class SingleStar extends React.Component{
  constructor(props){
    super(props);
  }


  renderSwitch(num, size) {
    switch(num) {
      case 1:
        return (
          <img
            src={StarFill}
            className='star'
            style={{width: `${size}px`}}
            alt='1 star'
          />);
      case -1:
        return (
          <img
            src={StarNoFill}
            className='star'
            style={{width: `${size}px`}}
            alt='no fill star'
          />);
      case .25:
        return (
          <img
            src={StarQuarter}
            className='star'
            style={{width: `${size}px`}}
            alt='.25 star'
          />);
      case .50:
        return (
          <img
            src={StarHalf}
            className='star'
            style={{width: `${size}px`}}
            alt='.50 stars'
          />);
      case .75:
        return (
          <img
            src={StarThreeQuarters}
            className='star'
            style={{width: `${size}px`}}
            alt='.75 star'
          />);
    }
  }

 render() {
   return (this.props ? this.renderSwitch(this.props.num, this.props.size) : null);
  }
}




export default SingleStar;
