import React from 'react'
import {mount, shallow} from 'enzyme'
import CarouselArrow from '../../../../client/src/components/relatedProducts/CarouselArrow.jsx';

it("renders a Carousel Arrow without crashing", () => {
  shallow(<CarouselArrow  direction='forward'/>)
})