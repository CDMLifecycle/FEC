import React from 'react';
import SingleStar from './SingleStar.jsx';
import Stars from './Stars.jsx';
import DistributionFilter from './DistributionFilter.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => {
  return props.productMetadata.totals
  ?
    (
    <div className='rating-breakdown-container'>
      <div>
        <h1>{props.productMetadata.totals.avgRating.toFixed(1)}</h1>
        <Stars avgQtr={props.productMetadata.totals.avgRatingsToQtr}/>
        <h3>{props.productMetadata.totals.percentRecommend}% of reviews recommend this product</h3>
        <DistributionFilter
          productMetadata={props.productMetadata}
          updateFilter={props.updateFilter}
        />
        <CharacteristicsBreakdown productMetadata={props.productMetadata}/>
      </div>
    </div>
  )
  : null
}

export default RatingBreakdown;