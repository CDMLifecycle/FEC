import React from 'react';
import SingleStar from './SingleStar.jsx';
import Stars from './Stars.jsx';
import DistributionFilter from './DistributionFilter.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';
import './ratingBreakdown.css';

const RatingBreakdown = (props) => {
  return props.productMetadata.totals
  ?
    (
    <div className='rating-breakdown-container'>
      <div className='number-stars-container'>
        <div className='big-number'>
          <h1>{props.productMetadata.totals.avgRating.toFixed(1)}</h1>
        </div>
        <div className='star-avg'>
          <Stars avgQtr={props.productMetadata.totals.avgRatingsToQtr} size={25} yellow={false}/>
          <div>{props.productMetadata.totals.totalRatings} Reviews</div>
        </div>
      </div>
      <div className='percent-rec'>
        <h4>{props.productMetadata.totals.percentRecommend}% of reviews recommend this product</h4>
      </div>
      <div>
        <DistributionFilter
          productMetadata={props.productMetadata}
          updateFilter={props.updateFilter}
        />
        <CharacteristicsBreakdown productMetadata={props.productMetadata}/>
      </div>
    </div>
  )
  : null;
}

export default RatingBreakdown;