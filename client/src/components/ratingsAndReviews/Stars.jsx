import React from 'react';
import SingleStar from './SingleStar.jsx';
import './stars.css';

const createStarSet = (avgQtr) => {
  if (!avgQtr) {
    return 0;
  }
  let starSet = [];
  let partialStar = avgQtr % 1;
  let wholeStar = avgQtr - partialStar;
  let noStar = partialStar > 0 ? 4 - wholeStar : 5 - wholeStar;

  for (let i = 0; i < wholeStar; i++) {
    starSet.push(1);
  };
  if (partialStar > 0) {
    starSet.push(partialStar);
  }
  for (let i = 0; i < noStar; i++) {
    starSet.push(-1);
  };
  return starSet;
}

const mapStars = (stars) => (
  <div className='star-container'>
    {createStarSet(stars.avgQtr).map((starType, index) =>
      <SingleStar num={starType} size={stars.size} key={index} />)
    }
  </div>
)

const Stars = (props) => ( props.size ?  mapStars(props) :  null );

export default Stars;