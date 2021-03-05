import React from 'react';
import {mount, shallow} from 'enzyme';
import RelatedItems from '../../../../client/src/components/relatedProducts/RelatedItems.jsx';
import CardCarousel from '../../../../client/src/components/relatedProducts/CardCarousel.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

it("renders without crashing", () => {
  shallow(<RelatedItems/>)
})

test('It should not render a children Card Carousel without props and state', () => {
  var wrapper = shallow(<RelatedItems/>);
  expect(wrapper.find(CardCarousel)).toHaveLength(0);
})
