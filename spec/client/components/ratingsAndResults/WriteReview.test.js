import React from 'react';
import {mount, shallow} from 'enzyme';
import dummyData from './reviewsDummyData.js';
import WriteReview from '../../../../client/src/components/ratingsAndReviews/WriteReview.jsx';
import WriteReviewCharacteristics from '../../../../client/src/components/ratingsAndReviews/WriteReviewCharacteristics.jsx';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';

describe('WriteReview modal', () => {

  it('should render correct number of given characteristics', () => {
    const wrapper = shallow(<WriteReview productMetadata={dummyData.metadataExt} productInfo={dummyData.product}/>);

    expect(wrapper.find(WriteReviewCharacteristics)).toHaveLength(4);
  });

  it('should render correct number of given characteristics', () => {
    const wrapper = shallow(<WriteReview productMetadata={dummyData.metadataExt} productInfo={dummyData.product}/>);

      wrapper.find('#star-box input[type="radio"][value="3"]').simulate('click');
      setTimeout(() => expect(wrapper.state('rating')).toBe(3), 2000);

      wrapper.find('#star-box input[type="radio"][value="3"]').simulate('change');
      setTimeout(() => expect(wrapper.state('selectedStarsArray')[2]).toBe(true), 2000);
  });

});

