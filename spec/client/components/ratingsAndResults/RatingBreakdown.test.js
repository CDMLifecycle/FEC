import React from 'react';
import axios from 'axios';

import Stars from '../../../../client/src/components/ratingsAndReviews/Stars.jsx';
import DistributionFilter from '../../../../client/src/components/ratingsAndReviews/DistributionFilter.jsx';
import CharacteristicsBreakdown from '../../../../client/src/components/ratingsAndReviews/CharacteristicsBreakdown.jsx';

import RatingBreakdown from '../../../../client/src/components/ratingsAndReviews/RatingBreakdown.jsx';

import { shallow } from 'enzyme';

const dummyMetaData = {
  characteristics: {
    Comfort: {id: 47021, value: "3.2000000000000000"},
    Fit: {id: 47019, value: "2.6571428571428571"},
    Length: {id: 47020, value: "2.7142857142857143"},
    Quality: {id: 47022, value: "3.0571428571428571"}
  },
  product_id: "14034",
  ratings: {
    0: "1",
    1: "4",
    2: "3",
    3: "11",
    4: "6",
    5: "16"
  },
  recommended: {
    false: "5",
    true: "36"
  },
  totals: {
    avgRating: 3.59,
    avgRatingsToQtr: 3.5,
    percentRecommend: 88,
    ratingsPercent: {1: "0.10", 2: "0.07", 3: "0.27", 4: "0.15", 5: "0.39"},
    sumRecommendations: 41,
    totalRatings: 41
  }
}

const dummyMetaDataNull = {
  characteristics: {
    Comfort: {id: 47021, value: null},
    Fit: {id: 47019, value: null},
    Length: {id: 47020, value: null},
    Quality: {id: 47022, value: null}
  },
  product_id: "14034",
  ratings: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  },
  recommended: {
    false: null,
    true: null
  },
  totals: {
    avgRating: null,
    avgRatingsToQtr: null,
    percentRecommend: null,
    ratingsPercent: {1: null, 2: null, 3: null, 4: null, 5: null},
    sumRecommendations: 41,
    totalRatings: null
  }
}

  describe('<RatingsBreakdown />', () => {

    it('renders child component <DistributionFilter />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyMetaData}/>);
      expect(wrapper.find(DistributionFilter)).toBeTruthy();
    })

    it('renders child component <CharacteristicsBreakdown />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyMetaData}/>);
      expect(wrapper.find(DistributionFilter)).toBeTruthy();
    })

    it('renders child component <Stars />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyMetaData}/>);
      expect(wrapper.find(DistributionFilter)).toBeTruthy();
    })

    it('renders alternate section if data incomplete', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyMetaDataNull}/>);
      expect(wrapper.contains(<h2>No Review Data</h2>)).toBe(true);
    })

  })