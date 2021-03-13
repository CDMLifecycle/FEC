import React from 'react';
import StarThreeQuarters from './svg/starThreeQuarter.svg';
import StarHalf from './svg/starHalf.svg';
import StarNoFill from './svg/starNoFill.svg';
import StarQuarter from './svg/starQuarter.svg';
import StarFill from './svg/starFill.svg';

const starMaker = (starType, size, num) => (
  <img
    src={starType}
    className='star'
    style={{width: `${size}px`}}
    alt={`${num}`}
  />
)

const renderSwitch = (num, size) => {
    switch(num) {
      case 1:
        return starMaker(StarFill, size, num);
      case -1:
        return starMaker(StarNoFill, size, num);
      case .25:
        return starMaker(StarQuarter, size, num);
      case .50:
        return starMaker(StarHalf, size, num);
      case .75:
        return starMaker(StarThreeQuarters, size, num);
      default:
        return starMaker(StarNoFill, size, num);
    }
  }

const SingleStar = (props) => (props ? renderSwitch(props.num, props.size) : null);

export default SingleStar;
