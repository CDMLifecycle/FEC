// ../../../../client/src/components/ratingsAndReviews/
import React from 'react';
import Stars from '../../../../client/src/components/ratingsAndReviews/Stars.jsx';
import SingleStar from '../../../../client/src/components/ratingsAndReviews/SingleStar.jsx';

import { shallow } from 'enzyme';

describe('Renders <Stars /> for values given', () => {

  it('renders five stars', () => {
    const wrapper = shallow(<Stars avgQtr={5} size={25}/>);
    expect(wrapper.find(SingleStar)).toHaveLength(5);
  })

  it('does not render with props undefined', () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper.find(SingleStar)).toBeNull();
  })

})