import React from 'react';
import axios from 'axios';
// import '../../../../client/src/components/ratingsAndReviews.css';
import RatingsAndReviews from '../../../../client/src/components/ratingsAndReviews/RatingsAndReviews.jsx';
import App from '../../../../client/src/components/App.jsx';
import { shallow } from 'enzyme';


describe('Test Ratings and Reviews section', () => {

  test('render the title of the header', () => {
    const wrapper = shallow(<RatingsAndReviews />);

    expect(wrapper.find('h3').text()).toContain('Ratings & Review')
  });
});