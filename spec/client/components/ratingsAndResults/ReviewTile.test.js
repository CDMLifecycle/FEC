import React from 'react';
import dummyData from './reviewsDummyData.js';
import {mount, shallow} from 'enzyme';

import ReviewTile from '../../../../client/src/components/ratingsAndReviews/ReviewTile.jsx';
import Stars from '../../../../client/src/components/ratingsAndReviews/Stars.jsx';

describe('ReviewTile', () => {

  it('renders with review info from prop' , () => {

    const wrapper = shallow(
      <ReviewTile
        review={dummyData.reviews[0]}
        productMetadata={dummyData.metadataExt}
      />)

      expect(wrapper.find(Stars)).toBeTruthy();
  })
})