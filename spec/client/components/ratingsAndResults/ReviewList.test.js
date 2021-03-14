import React from 'react';
import axios from 'axios';
import {mount, shallow} from 'enzyme';
import dummyData from './reviewsDummyData.js';

import RatingsAndReviews from '../../../../client/src/components/ratingsAndReviews/RatingsAndReviews.jsx';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';
import WriteReview from '../../../../client/src/components/ratingsAndReviews/WriteReview.jsx';
import ReviewTile from '../../../../client/src/components/ratingsAndReviews/ReviewTile.jsx';


describe('<ReviewList /> test', () => {

  it('renders 2 reviews upon recieving an array of reviews', () => {
    const wrapper = shallow(<ReviewList
      productMetadata={dummyData.metadataExt}
      productInfo={dummyData.product}
      reviewsList={dummyData.reviews}
    />);
    expect(wrapper.find(ReviewTile)).toHaveLength(2);
  });

  it('renders write a review modal upon click', () => {
    const wrapper = shallow(<ReviewList
      productMetadata={dummyData.metadataExt}
      productInfo={dummyData.product}
      reviewsList={dummyData.reviews}
    />);
    wrapper.find('#rl-right-button').simulate('click');
    expect(wrapper.find(WriteReview)).toBeTruthy();
  });


})