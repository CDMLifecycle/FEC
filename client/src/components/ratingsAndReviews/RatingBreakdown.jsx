import React from 'react';
import SingleStar from './SingleStar.jsx';
import DistributionFilter from './DistributionFilter.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingBreakdown = (props) => (
  <div>
    <h3>Show average</h3>
    <SingleStar />
    <DistributionFilter />
    <CharacteristicsBreakdown />
  </div>
)

export default RatingBreakdown;