import React from 'react';
import axios from 'axios';
import dummyData from './reviewsDummyData.js';
import RatingsAndReviews from '../../../../client/src/components/ratingsAndReviews/RatingsAndReviews.jsx';
import RatingBreakdown from '../../../../client/src/components/ratingsAndReviews/RatingBreakdown.jsx';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';

import { shallow } from 'enzyme';

describe('<RatingsAndReviews /> component', () => {

  it('renders child component <RatingBreakdown />', () => {

    const wrapper = shallow(<RatingsAndReviews productMetadata={dummyData.metadataExt} productInfo={dummyData.product}/>);

    expect(wrapper.find(<RatingBreakdown />)).toBeTruthy();
  });


  it('renders child component <ReviewList />', () => {

    const wrapper = shallow(<RatingsAndReviews productMetadata={dummyData.metadataExt} productInfo={dummyData.product}/>);

    expect(wrapper.find(<ReviewList  />)).toBeTruthy();
  });



});