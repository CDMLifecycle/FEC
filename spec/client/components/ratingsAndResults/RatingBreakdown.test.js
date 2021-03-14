import React from 'react';
import axios from 'axios';
import dummyData from './reviewsDummyData.js';

import Stars from '../../../../client/src/components/ratingsAndReviews/Stars.jsx';
import DistributionFilter from '../../../../client/src/components/ratingsAndReviews/DistributionFilter.jsx';
import CharacteristicsBreakdown from '../../../../client/src/components/ratingsAndReviews/CharacteristicsBreakdown.jsx';

import RatingBreakdown from '../../../../client/src/components/ratingsAndReviews/RatingBreakdown.jsx';

import { shallow } from 'enzyme';


  describe('<RatingsBreakdown />', () => {

    it('renders child component <DistributionFilter />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyData.metadataExt}/>);
      expect(wrapper.find(DistributionFilter)).toBeTruthy();
    })

    it('renders child component <CharacteristicsBreakdown />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyData.metadataExt}/>);
      expect(wrapper.find(CharacteristicsBreakdown)).toBeTruthy();
    })

    it('renders child component <Stars />', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyData.metadataExt}/>);
      expect(wrapper.find(Stars)).toBeTruthy();
    })

    it('renders alternate section if data incomplete', () => {
      const wrapper = shallow(<RatingBreakdown productMetadata={dummyData.metadataExtNull}/>);
      expect(wrapper.contains(<h2>No Review Data</h2>)).toBe(true);
    })

  })