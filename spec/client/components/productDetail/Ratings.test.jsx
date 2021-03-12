import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Ratings from '../../../../client/src/components/Product_rendering/Ratings.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering
describe('Ratings', () => {
  it("renders Ratings from Product_Detail without crashing", () => {
    shallow(<Ratings rating={0}/>)
  });
});