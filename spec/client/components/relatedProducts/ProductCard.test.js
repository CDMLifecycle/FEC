import React from 'react'
import {mount, shallow} from 'enzyme'
import ProductCard from '../../../../client/src/components/relatedProducts/ProductCard.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js'

const wrapper = mount(<ProductCard product={dummyData.formattedDefaultProduct}/>);

it("renders ProductCard without crashing", () => {
  shallow(<ProductCard  product={dummyData.formattedDefaultProduct}/>)
})

test('a product price is targeted by a discount css class when a sale_price is present in props', () => {
  const testProduct = shallow(<ProductCard  product={dummyData.testDataWithSalePrice}/>)
  var discountClass = 'ProductCard-product-information-price-discounted'
  expect(testProduct.find(`.${discountClass}`)).toBeDefined();
})

test('an error should be thrown when a card is not passed a product prop', () => {
  expect(() => shallow(<ProductCard />)).toThrow(TypeError);
})