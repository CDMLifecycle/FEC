import React from 'react';
import {mount, shallow} from 'enzyme';
import CardCarousel from '../../../../client/src/components/relatedProducts/CardCarousel.jsx';
import ProductCard from '../../../../client/src/components/relatedProducts/ProductCard.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

describe('CardCarousel', () => {
  it("renders a Card Carousel with no props without crashing", () => {
    shallow(<CardCarousel/>)
  });

  it('renders a child when passed an array relatedProducts', () => {
    let wrapper = shallow(<CardCarousel relatedProducts={[dummyData.formattedDefaultProduct]}/>);
    expect(wrapper.find(ProductCard)).toBeTruthy();
  })
})
