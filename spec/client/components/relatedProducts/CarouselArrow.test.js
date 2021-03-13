import React from 'react'
import {mount, shallow} from 'enzyme'
import CarouselArrow from '../../../../client/src/components/relatedProducts/CarouselArrow.jsx';


describe('CarouselArrow', () => {

  it("renders a Carousel Arrow without crashing", () => {
    shallow(<CarouselArrow  direction='forward'/>)
  })

  // it("should call mock function when clicked", () => {
  //   const mockFn = jest.fn();
  //   const val = shallow( <CarouselArrow onClick={mockFn} className='sizeButton' id='XS' value='XS' key='XS'>XS</button>);

  //   val.simulate('click');
  //   expect(mockFn).toHaveBeenCalled();
  // });

})