import React from 'react';
import SingleStar from './SingleStar.jsx';
import DistributionFilter from './DistributionFilter.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  console.log(props);
  return props.productMetadata.totals
  ?

    (
    <div className='rating-breakdown-container'>
      <div>
        {/* {console.log(productMetadata)} */}
        <h1>{props.productMetadata.totals.avgRating.toFixed(1)}</h1>
        <SingleStar avgQtr={props.productMetadata.totals.avgRatingsToQtr}/>
        <h3>{props.productMetadata.totals.percentRecommend}% of reviews recommend this product</h3>
        <DistributionFilter
          productMetadata={props.productMetadata}
          updateFilter={props.updateFilter}
        />
        <CharacteristicsBreakdown />
      </div>
    </div>
  )
  : null
}

export default RatingBreakdown;