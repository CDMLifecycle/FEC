import React from 'react';
import axios from 'axios';
import RatingsAndReviews from '../../../../client/src/components/ratingsAndReviews/RatingsAndReviews.jsx';
import RatingBreakdown from '../../../../client/src/components/ratingsAndReviews/RatingBreakdown.jsx';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';

import { shallow } from 'enzyme';


const dummyMetaData = {
  "product_id": "14034",
  "ratings": {
      "0": "1",
      "1": "4",
      "2": "3",
      "3": "10",
      "4": "6",
      "5": "14"
  },
  "recommended": {
      "false": "5",
      "true": "33"
  },
  "characteristics": {
      "Fit": {
          "id": 47019,
          "value": "2.5937500000000000"
      },
      "Length": {
          "id": 47020,
          "value": "2.6875000000000000"
      },
      "Comfort": {
          "id": 47021,
          "value": "3.0312500000000000"
      },
      "Quality": {
          "id": 47022,
          "value": "2.9375000000000000"
      }
  }
}

const dummyProductInfo = {name: "Camo Onesie"}


describe('<RatingsAndReviews /> component', () => {

  it('renders child component <RatingBreakdown />', () => {

    const wrapper = shallow(<RatingsAndReviews productMetadata={dummyMetaData} productInfo={dummyProductInfo}/>);

    expect(wrapper.find(<RatingBreakdown />)).toBeTruthy();
  });



  it('renders child component <ReviewList />', () => {

    const wrapper = shallow(<RatingsAndReviews productMetadata={dummyMetaData} productInfo={dummyProductInfo}/>);

    expect(wrapper.find(<ReviewList  />)).toBeTruthy();
  });



});