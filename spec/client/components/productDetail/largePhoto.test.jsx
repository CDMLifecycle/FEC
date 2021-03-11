import React from 'react';
import {mount, shallow, render} from 'enzyme';
import LargePhoto from '../../../../client/src/components/Product_rendering/largePhoto.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering
describe('LargePhotos', () => {
  it("renders largePhoto from Product_Detail without crashing", () => {
    shallow(<LargePhoto photo={'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'} fullscreen={false}  direction={'left'}/>)
  });
});