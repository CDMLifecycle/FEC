import React from 'react';
import {mount, shallow} from 'enzyme';
import CardCarousel from '../../../../client/src/components/relatedProducts/CardCarousel.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

it("renders without crashing", () => {
  shallow(<CardCarousel/>)
})