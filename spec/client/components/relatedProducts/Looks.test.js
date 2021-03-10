import React from 'react';
import {mount, shallow} from 'enzyme';
import Looks from '../../../../client/src/components/relatedProducts/Looks.jsx';
import CardCarousel from '../../../../client/src/components/relatedProducts/CardCarousel.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

it("renders without crashing when no props are passed", () => {
  shallow(<Looks/>)
})

test('It should not render a children Card Carousel without props and state', () => {
  var wrapper = shallow(<Looks/>);
  expect(wrapper.find(CardCarousel)).toHaveLength(0);
})
