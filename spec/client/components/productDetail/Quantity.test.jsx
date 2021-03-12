import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Quantity from '../../../../client/src/components/Product_rendering/Quantity.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering

describe('renderImages', () => {
  it("renders Quantity from Product_Detail without crashing", () => {
    shallow(<Quantity quantityIncrease={jest.fn()}  quantityDecrease={jest.fn()} />)
  });
});