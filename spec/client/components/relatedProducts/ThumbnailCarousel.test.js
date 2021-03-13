import React from 'react'
import {mount, shallow} from 'enzyme'
import ThumbnailCarousel from '../../../../client/src/components/relatedProducts/ThumbnailCarousel.jsx';


describe('ThumbnailCarousel', () => {
  it("renders a Thumbnail Carousel Component without crashing when not passed props", () => {
    shallow(<ThumbnailCarousel/>)
  })

  it('does not produce rows if not given props', () => {
    let wrapper = shallow(<ThumbnailCarousel />);
    expect(wrapper.find('.ThumbnailCarousel-row')).toBeUndefined();
  })
})
