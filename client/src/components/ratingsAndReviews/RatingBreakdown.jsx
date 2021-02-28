import React from 'react';
import SingleStar from './SingleStar.jsx';
import DistributionFilter from './DistributionFilter.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => (
  <div>
    <h3>3.5 stars</h3>
    <SingleStar />
    <DistributionFilter />
    <CharacteristicsBreakdown />
  </div>
)

export default RatingBreakdown;