import React from 'react'
import {mount, shallow} from 'enzyme'
import ThumbnailCarousel from '../../../../client/src/components/relatedProducts/ThumbnailCarousel.jsx';

it("renders a Thumbnail Carousel Component without crashing when not passed props", () => {
  shallow(<ThumbnailCarousel/>)
})